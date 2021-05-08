// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

// adding to the end
// let arr = [34, 234, 567, 4];
// print(arr.push(23,45,56));
// print(arr);
   push(value) {
    this.length++;
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    if (!this.head) this.head = node;
    return this;
  }

  // removing to the end
  pop() {
    if (this.length > 0) {
      this.length--;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return this;
    }
    return this.printError(`TRY AGAIN, there are no more nodes`);
  }

  // adding from the beginning
  shift() {
    // if (this.length > 0) {
    //   --this.length;
    //   this.head = this.head.next;
    //   this.head.prev = null;
    //   return this;
    // }
}

// Tests
const list = new DoubleLinkedList();
list.push("Huskies");
list.push("are");
list.push("the");
list.push("best!");
list.shift("nick");
list.pop("hale");
console.log(list);
