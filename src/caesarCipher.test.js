const { describe } = require("node:test")
const caesarCipher = require("./caesarCipher")

describe("CAESAR CIPHER", () => {
  test("it takes a string and a shift factor and returns it with each character 'shifted'", () => {
    expect(caesarCipher("HELLO", 3)).toBe("KHOOR")
  })
})
