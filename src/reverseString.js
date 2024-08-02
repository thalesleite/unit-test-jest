const reverseString = (word) => {
  const reversed = word.split("").reverse().join("")
  return reversed
}

module.exports = reverseString
