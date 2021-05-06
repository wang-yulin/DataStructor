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
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++
  }

}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.prepend(0)
console.log(myLinkedList)