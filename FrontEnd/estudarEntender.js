function Superdog(textCript, key) {
  if (key < 0) return caesarCypher(textCript, key + 26);

  const alphabetCapitalMinIndex = 'A'.charCodeAt(0);
  const alphabetMinIndex = 'a'.charCodeAt(0);
  const isCapital = (char) => char.charCodeAt(0) >= alphabetCapitalMinIndex && char.charCodeAt(0) <= 'Z'.charCodeAt(0)

  const getCharIndexInAlphabet = (char) =>
    !isCapital(char)  ? char.charCodeAt(0) - alphabetMinIndex  : isCapital(char)
    
    ? char.charCodeAt(0) - alphabetCapitalMinIndex    : null
    
  let newMessage = ''

  for (let messageIndex in textCript) {
    const char = textCript[messageIndex]
    const charIndexInAlphabet = getCharIndexInAlphabet(char)
    
    if (!char.match(/[a-z]/i)) {
      newMessage += char
      continue
    }

    const sumBaseIndex = isCapital(char) ? alphabetCapitalMinIndex : alphabetMinIndex
    const newCharCode = ((charIndexInAlphabet + key) % 26) + sumBaseIndex
    newMessage += String.fromCharCode(newCharCode)
  }

  return newMessage
} 
caesarCypher(email, key)
caesarCypher(email, key) // Nwecu Ucpvqu
caesarCypher('Nwecu Ucpvqu', -key) // Lucas Santos