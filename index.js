//Array from scratch
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    let deleteItem = this.data[index];
    this.shiftIndex(index);
    this.length--;
    return deleteItem;
  }

  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
  }

}

//Merge sorted array
//Example: [0, 3, 4, 31] [4, 6, 30] =>
//[0, 3, 4, 4, 6, 30, 31]

let arr1 = [0, 3, 4, 31]
let arr2 = [0, 6, 30, 23, 78, 2]

function mergeSortedArray(arr1, arr2) {
  //Compare the items from start,put the lower one into the result array, and then loop to the next one, ends at the max length of the two arrays
  let megedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while ( arr1Item !== undefined  || arr2Item !== undefined ) {
    console.log(arr1Item, arr2Item)
    if (arr2Item === undefined || arr1Item < arr2Item) {
      megedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      megedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return megedArray;
}

function maxSumOfSubarray(nums) {
  let maxSum = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum < 0 ? sum = arr[i] : sum += arr[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

class myHashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0;
    for ( let i = 0; i < size.length; i++) {
      hash = (key.charCodeAt(i) * i + hash) % i 
    }
    return hash;
  }

  
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
  }

  printList() {
    const valueArray = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      valueArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return valueArray
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }

    if(index === 0) {
      return this.prepend(value);
    } 

    const leader = this.traverseToIndex(index-1);
    const newNode = new Node(value);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentIndex !== index) {
    currentIndex++;
    currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(index) {
    if(index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    const leader = this.traverseToIndex(index-1);
    const pointer = leader.next.next;
    leader.next = pointer;
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.tail = this.head;
    this.head = first;
    return this
  }
}

// let myLinkedList = new LinkedList(1);
// myLinkedList.append(2)
// myLinkedList.append(3)
// myLinkedList.prepend(0)
// myLinkedList.insert(2, 'a')
// myLinkedList.reverse()
// // myLinkedList.printList()

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.bottom) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }
}

// let myStack = new Stack();
// myStack.push(0);
// myStack.push(1);
// myStack.push(2);
// myStack.pop();
// console.log(myStack)

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

// const myQueue = new Queue();
// myQueue.enqueue(0);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.dequeue()
// console.log(myQueue)

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if(!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if(!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    let deleteNode = this.lookup(value);
    if(!deleteNode) {
      return false;
    }
    //remove the node that has no children
    if(!deleteNode.left && !deleteNode.right) {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {//left
          if(currentNode.left === deleteNode) {
            currentNode.left = null;
            break;
          }
          currentNode = currentNode.left;
        } else if(value > currentNode.value) {//right
          if(currentNode.right === deleteNode) {
            currentNode.right = null;
            break;
          }
          currentNode = currentNode.right;
        } 
      }
    }
    //remove the node that has one child
    if(!deleteNode.left && deleteNode.right
      || deleteNode.left && !deleteNode.right) {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(currentNode.left === deleteNode) {
            currentNode.left = deleteNode.right || deleteNode.left;
            break;
          }
          currentNode = currentNode.left;
        } else if(value > currentNode.value) {
          if(currentNode.right === deleteNode) {
            currentNode.right = deleteNode.right || deleteNode.left;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    } 
    //remove the node that has two children
    if(deleteNode.left && deleteNode.right) {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {//left
          if(currentNode.left === deleteNode) {
            let replaceNode = deleteNode.left;
            let replaceParentNode = deleteNode;
            while(replaceNode.left) {
              replaceParentNode = replaceNode;
              replaceNode = replaceNode.left;
            }
            currentNode.left = replaceNode;
            replaceParentNode.left = replaceNode.right;
            replaceNode.left = deleteNode.left;
            replaceNode.right = deleteNode.right;
            break;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {//right
          if(currentNode.right === deleteNode) {
            let replaceNode = deleteNode.left;
            let replaceParentNode = deleteNode;
            while(replaceNode.left) {
              replaceParentNode = replaceNode;
              replaceNode = replaceNode.left;
            }
            currentNode.right = replaceNode;
            replaceParentNode.left = replaceNode.right;
            replaceNode.left = deleteNode.left;
            replaceNode.right = deleteNode.right;
            replaceParentNode.left = null;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const myBSTree = new BSTree();
myBSTree.insert(9)
myBSTree.insert(4)
myBSTree.insert(6)
myBSTree.insert(20)
myBSTree.insert(170)
myBSTree.insert(15)
myBSTree.insert(1)
myBSTree.insert(16)
myBSTree.remove(20)
JSON.stringify(traverse(myBSTree.root))

function traverse(node) {
  const tree = {value: node.value}
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}