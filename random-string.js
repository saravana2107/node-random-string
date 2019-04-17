module.exports = (config = {}) => {
  if (typeof config === 'number') {
    config = { length: config }
  }

  let chars = config.chars || ''
  let length = config.length || 8

  if (!chars) {
    const numberCharset = '0123456789'
    let alphabeticCharset = 'abcdefghiklmnopqrstuvwxyz'

    if (config.upperCase) {
      alphabeticCharset = alphabeticCharset.toUpperCase()
    } else if (!config.lowerCase) {
      alphabeticCharset = `${alphabeticCharset.toUpperCase()}${alphabeticCharset}`
    }

    if (config.charset === 'alphabetic') {
      chars = alphabeticCharset
    } else if (config.charset === 'numeric') {
      chars = numberCharset
    } else {
      chars = `${numberCharset}${alphabeticCharset}`
    }
  }

  let randomString = ''
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * chars.length)
    randomString += chars.substring(randomNum, randomNum + 1)
  }

  return randomString.toString()
}
