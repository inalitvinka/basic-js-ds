const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    const removed = this.head;
    this.head = this.head.next;
    this.length = this.length - 1;
    return removed.value;
  }
}

module.exports = {
  Queue
};
