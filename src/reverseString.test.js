const { describe } = require("node:test")
const reverseString = require("./reverseString")

describe("REVERSE STRING", () => {
  test("takes a string and returns it reversed", () => {
    expect(reverseString("content")).toBe("tnetnoc")
    expect(reverseString("violation")).toBe("noitaloiv")
  })
})
