//2.1 Remove Dups: Write code to remove duplicats from an unsorted linked list.


const removeDups = (linkedList) => {
  let dataObj = {}
  let currentNode = linkedList
  let previousNode = null;
  while (currentNode) {
    let currentData = currentNode.data
    if (!dataObj[currentData]) dataObj[currentData] = true
    //remove that node
    else {
      previousNode.next = currentNode.next
    }
    previousNode = currentNode
    currentNode = currentNode.next
  }
  return linkedList
}




let myLinkedList = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 2,
      next: {
        data: 6,
        next: {
          data: 3,
          next: {
            data: 8,
            next: {
              data: 10,
              next: null
            }
          }
        }
      }
    }
  }
}




