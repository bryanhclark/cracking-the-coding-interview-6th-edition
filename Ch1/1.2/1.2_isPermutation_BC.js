//1.2 Check permutation: Given two strings, write a method to decide if one is a permutation of the other
const chkPermu = (str1, str2) => {
  let permArray = permutations(str1)
  for (let i = 0; i < permArray.length; i++) {
    if (permArray[i] === str2) return true
  }
  return false
}

const permutations = (str) => {
  let perms = []
  if (str.length === 1) {
    perms.push(str)
    return perms
  }
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i]
    let remainingLetters = str.substring(0, i) + str.substring(i + 1)
    let remainingPerumtations = permutations(remainingLetters)
    for (let j = 0; j < remainingPerumtations.length; j++) {
      perms.push(currentLetter + remainingPerumtations[j])
    }
  }
  return perms
}




let myStr1 = 'taco'
let myStr2 = 'acto' //=> true

let myStr3 = 'pie' //=> false
