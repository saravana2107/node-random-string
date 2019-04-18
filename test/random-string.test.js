const assert = require('assert')
const randomString = require('../random-string')

describe('Random String', function () {
  it('should return random string for given length', function () {
    assert.strictEqual(randomString(12).length, 12)
  })

  it('should return random string with default length 32', function () {
    assert.strictEqual(randomString().length, 32)
  })

  it('should return random string with given charset and uppercase', function () {
    const randomStringText = randomString({ charset: 'alphabetic', upperCase: true })
    assert.strictEqual(randomStringText.toUpperCase(), randomStringText)
  })

  it('should return random string with given charset and lowercase', function () {
    const randomStringText = randomString({ charset: 'alphabetic', lowerCase: true })
    assert.strictEqual(randomStringText.toLowerCase(), randomStringText)
  })

  it('should return random string with given charset and lowercase and length', function () {
    const randomStringText = randomString({ charset: 'alphabetic', lowerCase: true, length: 13 })
    assert.strictEqual(randomStringText.toLowerCase(), randomStringText)
    assert.strictEqual(randomStringText.length, 13)
  })

  it('should return random string with given chars', function () {
    const chars = 'abc'
    const randomStringText = randomString({ chars })
    randomStringText.split('').forEach((text) => {
      assert.strictEqual(chars.split('').indexOf(text) >= 0, true)
    })
  })

  it('should return random string with given chars and length', function () {
    const chars = 'abc'
    const randomStringText = randomString({ chars, length: 24 })
    randomStringText.split('').forEach((text) => {
      assert.strictEqual(chars.split('').indexOf(text) >= 0, true)
    })
    assert.strictEqual(randomStringText.length, 24)
  })
})
