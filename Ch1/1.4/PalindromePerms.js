//given a string, write a function to check if it is a permuation of a palidrome.
//palindrome does not need to be limited to just dicitonary words

//definition of palindrome
//every letter has an even number of occurences, except 1, at most can have an odd number of occurences

const palidromePerms = str => {
  let strObj = {}
  let alreadyOdd = false
  for (let i = 0; i < str.length; i++) {
    if (strObj[str[i]]) strObj[str[i]]++
    else if (!strObj[str[i]] && str[i] !== ' ') strObj[str[i]] = 1
  }
  for (letter in strObj) {
    if (strObj[letter] % 2 !== 0 && !alreadyOdd) alreadyOdd = true
    else if (strObj[letter] % 2 !== 0 && alreadyOdd) return false
  }
  return true
}


console.log(palidromePerms('tact coa'));