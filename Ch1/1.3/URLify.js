/* Write a method to replace all spaces in a string w/ %20
Ex: 'Mr John Smith   ' => 'Mr%20John%20Smith'
*/

//Solution 1: with JS methods


const urlifyStr = str => {
  return str.trim().split(' ').join('%20')
}


console.log(urlifyStr('mr john smith  '))