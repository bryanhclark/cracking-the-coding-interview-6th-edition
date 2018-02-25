//Sum Lists: you have two numbers represents by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list

//EX: Input (7-> 1 -> 6) + (5-> 9-> 2) 617 + 295
// Output: 2 -> 1 -> 9  912

const sumLists = (ll1, ll2) => {
  let num1 = buildNum(ll1);
  let num2 = buildNum(ll2);
  return buildLL(num1 + num2)
}

const buildNum = (ll) => {
  let arr = []
  let currentNode = ll;
  while (currentNode) {
    arr.push(currentNode.data)
    currentNode = currentNode.next
  }
  return Number(arr.reverse().join(''));
}

const buildLL = (num) => {
  let myLL = new LinkedList()
  let numArr = String(num).split('')
  numArr.forEach(num => {
    num = Number(num)
    myLL.addToHead(num)
  })
  return myLL
}
//add to head Linked List
function LinkedList() {
  this.head = null;
}

function Node(val) {
  this.data = val;
  this.next = null
}

LinkedList.prototype.addToHead = function (val) {
  if (!this.head) {
    this.head = new Node(val)
  } else {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead
  }
}



let myLL1 = {
  data: 7,
  next: {
    data: 1,
    next: {
      data: 6,
      next: null
    }
  }
}

let myLL2 = {
  data: 5,
  next: {
    data: 9,
    next: {
      data: 2,
      next: null
    }
  }
}

console.log(sumLists(myLL1, myLL2));

