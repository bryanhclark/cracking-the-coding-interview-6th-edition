//Rotate NxN matrix
//take an NxN matrix and rotate it 90 to the right
//Top to Right and Bottom to Left: in order, descending across all arrays
//Right to Bottom and Left to Top: reverse order, in one array
//Internal layers = N-2


const rotate = (matrix) => {
  var n = matrix.length;
  for (var i = 0; i < (n / 2); i++) {
    for (var j = 0; j < Math.floor(n / 2); j++) {
      var temp = matrix[i][j];
      //takes the first element of the last array and puts it in the first array
      matrix[i][j] = matrix[n - 1 - j][i];
      //takes the last element of the last array, puts it in the last arrays first place
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      //takes the last element of the first array, and puts it in the last/last
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      //sets the first arrays last element to the original first/first
      matrix[j][n - 1 - i] = temp;
      console.log('i', i)
      console.log('j', j)
      console.log(matrix)
    }

  }
  return matrix;
}
i = 0
j = 1


// const myArray = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]

let fiveArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

console.log(rotate(fiveArr))