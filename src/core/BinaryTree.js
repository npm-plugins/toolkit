/**
 * 二叉树节点
 * @param {number} data - 节点值
 * @param {Node} left - 左子树
 * @param {Node} right - 右子树
 * @returns {Node}
 */

class Node {
  constructor(data, left = null, right = null) {
    this.key = data
    this.left = left
    this.right = right
  }
}

/**
 * 创建二叉树
 */
class BinaryTree {
  constructor() {
    this.root = null
  }
  /**
   * 插入节点
   * @param {number} data - 节点值
   */
  insert(data) {
    const newNode = new Node(data)
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    };
    if (this.root === null) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }
  /**
   * 查找最小值
   * @param {Node} node - 根节点
   * @returns {Node}
   */
  getMin(node) {
    const minNode = node => {
      return node ? (node.left ? minNode(node.left) : node) : null
    };
    return minNode(node || this.root)
  }
  /**
   * 查找最大值
   * @param {Node} node - 根节点
   * @returns {Node}
   */
  getMax(node) {
    const minNode = node => {
      return node ? (node.right ? minNode(node.right) : node) : null
    };
    return minNode(node || this.root)
  }
  /**
   * 中序遍历
   * @returns {array}
   */
  inOrder() {
    let backs = []
    const inOrderNode = (node, callback) => {
      if (node !== null) {
        inOrderNode(node.left, callback);
        backs.push(callback(node.key));
        inOrderNode(node.right, callback)
      }
    };
    inOrderNode(this.root, callback);
    function callback(v) {
      return v
    }
    return backs
  }
  /**
   * 前序遍历
   * @returns {array}
   */
  preOrder() {
    let backs = []
    const preOrderNode = (node, callback) => {
      if (node !== null) {
        backs.push(callback(node.key));
        preOrderNode(node.left, callback);
        preOrderNode(node.right, callback)
      }
    };
    preOrderNode(this.root, callback);
    function callback(v) {
      return v
    }
    return backs
  }
  /**
   * 后序遍历
   * @returns {array}
   */
  postOrder() {
    let backs = []
    const postOrderNode = (node, callback) => {
      if (node !== null) {
        postOrderNode(node.left, callback);
        postOrderNode(node.right, callback);
        backs.push(callback(node.key))
      }
    };
    postOrderNode(this.root, callback);
    function callback(v) {
      return v
    }
    return backs
  }
  /**
   * 层序遍历
   * @returns {array}
   */
  zOrder() {
    const node = this.root
    const backs = []
    let result = [node]
    const zOrderNode = () => {
      if (result.length) {
        const nodes = result
        for (let i = 0; i < result.length; i++) {
          backs.push(result[i].key)
        }
        result = []
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[j].left !== null) {
            result.push(nodes[j].left)
          }
          if (nodes[j].right !== null) {
            result.push(nodes[j].right)
          }
        }
        zOrderNode()
      }
    }
    zOrderNode()
    return backs
  }
  /**
   * 获取根节点的高度
   * @param {Node} node - 根节点
   * @returns {number}
   */
  getNodeHeight(node) {
    if (node == null) {
      return 0;
    }
    const oLeft = this.getNodeHeight(node.left);
    const oRight = this.getNodeHeight(node.right);
    return 1 + Math.max(oLeft, oRight);
  }
  /**
   * 查找节点
   * @param {number} data - 节点值
   * @returns {Node}
   */
  find(data) {
    var current = this.root
    while (true) {
      if (data === current.key) {
        return current
      }
      current = data < current.key ? current.left : current.right;
      if (current === null) {
        return null
      }
    }
  }
  /**
   * 删除节点
   * @param {number} key - 节点值
   */
  remove(key) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null
      }
      if (data === node.key) {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) {
          return node.right
        }
        if (node.right === null) {
          return node.left;
        }
      } else if (data < node.key) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, key)
  }
}

export default BinaryTree