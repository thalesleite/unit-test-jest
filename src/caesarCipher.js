/*
The Caesar Shift Cipher, also known as Caesar Cipher, is one of the simplest and oldest encryption techniques. 
Named after Julius Caesar, who reportedly used it to communicate with his officials, this cipher works by shifting 
the letters of the plaintext by a fixed number of positions down or up the alphabet.
*/
const caesarCipher = (word, shift) => {
  if (shift < 0) {
    shift += 26
  }

  let result = ""

  for (let i = 0; i < word.length; i++) {
    let char = word[i]

    if (char.match(/[a-z]/i)) {
      let code = word.charCodeAt(i)

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65)
        // Lowercase letters
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
    }

    result += char
  }

  return result
}

module.exports = caesarCipher
