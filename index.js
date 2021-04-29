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

let newArray = new MyArray();
newArray.push("Hello")
newArray.push("my")
newArray.push("World")
newArray.push("!")
newArray.deleteAtIndex(1)
console.log(newArray)