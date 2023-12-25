const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.init = null;
  }
  // init the tree
  root() {
    if (!this.init) {
      return null;
    }
    return this.init;
  }

  add(data) {
    this.init = addNode(this.init, data);

    function addNode(node, data) {
      // if we don't have => new node
      if (!node) {
        return new Node(data);
      }
      // if we have => we return a current node / only unique nodes
      if (node.data === data) {
        return node;
      }
      // check the value to know where we are going => to the left or to the right 
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return checkNode(this.init, data);

    function checkNode (node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return checkNode(node.left, data);
      } else {
        return checkNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.init, data);

    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.init = removeNode(this.init, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    let node = this.init;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.init;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};