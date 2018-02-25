//1.1 is Unique: Implement an algo to determine if a string has all unique characters. What if you cannot use additional data structures
//Is there an O(n log n) solution

const isUnique = (str) => {
  let letterObj = {}
  for (let i = 0; i < str.length; i++) {
    if (!letterObj[str[i]]) letterObj[str[i]] = true
    else return false
  }
}


//Implementing a solution that didn't use additional data structures would be a brute force comparing each letter in the str with every other letter and returning true if there are no matches

//O(n log(n)) would be to sort the string then compare adjacent letters


let str1 = 'abcdef' //true
let str2 = 'abcdcba' //false
