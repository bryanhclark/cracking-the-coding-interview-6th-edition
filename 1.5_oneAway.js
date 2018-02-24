//1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one (or zero) edits away.

//Summary: 
//First, we know that if there is a difference in length greater than 1, then there has been > 1 edit, immediately return false
//We need to start iterating through each string, and seeing if there are any differences at each index. If there is a difference, we need to record if we've already seen an edit.
//Then we need to determine if the edit is a deletion or an insertion, because that affects the length and iteration through the strings, if it's a replacement, we can just set edited to true
//if it's a deletion, we need to account for the smaller length of str2 so we decrement 'j' for the next iteration of the loop so i and j both reference what should be the same letters, and if there is a difference again, we already have set edited to true and can then exit the loop. It's the reverse for insertion, but same idea

const oneAway = (str1, str2) => {
  //if the difference in the length of the strings is > 2, it can't be true
  if (Math.abs(str1.length - str2.length) > 1) return false
  //if str1.length > str2.length it was deletion, else insert
  let delOrInsrt = str1.length > str2.length, i, j, edited = false
  //iterate through each str
  for (i = j = 0; i < str1.length && j < str2.length; i++ , j++) {
    //if letters dont match
    if (str1[i] !== str2[j]) {
      //if we already have seen an edit, return false
      if (edited) return false
      //if deletion, go back on letter in str2 for next loop
      if (delOrInsrt) j--
      //if insertion, go back on letter in str1 for next loop
      if (!delOrInsrt) i--
      edited = true
    }
  }
  return true
}

//O(N) = N, where N is the length of the longer strings
//Space Complexity: O(1)


let myStr1 = 'pale'
let myStr2 = 'pales'

console.log(oneAway(myStr1, myStr2))