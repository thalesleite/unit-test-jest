const { describe } = require("node:test")
const capitalize = require("./capitalize")

describe("CAPITALIZE", () => {
  test("return first letter capitalized", () => {
    expect(capitalize("batata")).toBe("Batata")
    expect(capitalize("character")).toBe("Character")
  })
})
