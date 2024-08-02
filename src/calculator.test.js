const { describe } = require("node:test")
const calculator = require("./calculator")

describe("CALCULATOR", () => {
  test("add", () => {
    expect(calculator.add(5, 8)).toBe(13)
    expect(calculator.add(20, 8)).toBe(28)
  })

  test("subtract", () => {
    expect(calculator.subtract(50, 8)).toBe(42)
    expect(calculator.subtract(5, 8)).toBe(-3)
  })

  test("divide", () => {
    expect(calculator.divide(20, 2)).toBe(10)
    expect(calculator.divide(21, 3)).toBe(7)
  })

  test("multiply", () => {
    expect(calculator.multiply(2, 8)).toBe(16)
    expect(calculator.multiply(5, 9)).toBe(45)
  })
})
