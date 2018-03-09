/* implement a method to perform basic string compression use the countrs of repeated letters.
Ex: aabccccaaa -> a2b1c4a3

Initial thoughts:
variables: 
previousLetter:
currentCount:
totalCount
compressedStr
-> go through string, if letter === previous letter, increment currentCount
-> if letter !== previous letter, first add previousLetter+currentCount to compressedStr and addCurrentCount to totalCount
-> then letter = currentLEtter and currentCount = 1
->  totalCount * 2 < str.length ? compressedStr : str
*/

const compressedStr = str => {
  let previousLetter = str[0], newStr = '', currentCount = 1
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === previousLetter) currentCount++
    else {
      newStr += previousLetter + currentCount + ''
      previousLetter = str[i]
      currentCount = 1
    }
  }
  return newStr.length < str.length ? newStr : str
}


console.log(compressedStr('aabccccaaa'))
console.log(compressedStr('aaabbccd'))

