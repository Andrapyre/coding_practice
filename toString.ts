const formatValue = (value: any): string => {
  if (typeof(value) === "string")
    return `"${value}"`
  else if (typeof(value) === "number")
    return `${value}`
  else if (typeof(value) === "boolean")
    return `${value}`
  else if (typeof(value) === "undefined")
    return `${value}`
  else if (typeof(value) === "function")
    return `function`
}

const toString = (obj: any): string => {
  let str = "\{"
  const keys: string[] = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i]
    const value: any = obj[key]
    const isIndexLast: boolean = i === keys.length - 1
    if (typeof(value) === "object") {
      const subObj = toString(value)
      str += `${key}: ${subObj}${isIndexLast ? "" : ", "}`
    } else {
      const additionalStr = `${key}: ${formatValue(value)}${isIndexLast ? "" : ", "}`
      str += additionalStr
    }
  }
  str += "}"
  return str
}

export default toString
