function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 二叉树节点
 * @param {number} data - 节点值
 * @param {Node} left - 左子树
 * @param {Node} right - 右子树
 * @returns {Node}
 */
var Node = function Node(data) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.key = data;
  this.left = left;
  this.right = right;
};
/**
 * 创建二叉树
 */


var BinaryTree =
/*#__PURE__*/
function () {
  function BinaryTree() {
    _classCallCheck(this, BinaryTree);

    this.root = null;
  }
  /**
   * 插入节点
   * @param {number} data - 节点值
   */


  _createClass(BinaryTree, [{
    key: "insert",
    value: function insert(data) {
      var newNode = new Node(data);

      var insertNode = function insertNode(node, newNode) {
        if (newNode.key < node.key) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            insertNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            insertNode(node.right, newNode);
          }
        }
      };

      if (this.root === null) {
        this.root = newNode;
      } else {
        insertNode(this.root, newNode);
      }
    }
    /**
     * 查找最小值
     * @param {Node} node - 根节点
     * @returns {Node}
     */

  }, {
    key: "getMin",
    value: function getMin(node) {
      var minNode = function minNode(node) {
        return node ? node.left ? minNode(node.left) : node : null;
      };

      return minNode(node || this.root);
    }
    /**
     * 查找最大值
     * @param {Node} node - 根节点
     * @returns {Node}
     */

  }, {
    key: "getMax",
    value: function getMax(node) {
      var minNode = function minNode(node) {
        return node ? node.right ? minNode(node.right) : node : null;
      };

      return minNode(node || this.root);
    }
    /**
     * 中序遍历
     * @returns {array}
     */

  }, {
    key: "inOrder",
    value: function inOrder() {
      var backs = [];

      var inOrderNode = function inOrderNode(node, callback) {
        if (node !== null) {
          inOrderNode(node.left, callback);
          backs.push(callback(node.key));
          inOrderNode(node.right, callback);
        }
      };

      inOrderNode(this.root, callback);

      function callback(v) {
        return v;
      }

      return backs;
    }
    /**
     * 前序遍历
     * @returns {array}
     */

  }, {
    key: "preOrder",
    value: function preOrder() {
      var backs = [];

      var preOrderNode = function preOrderNode(node, callback) {
        if (node !== null) {
          backs.push(callback(node.key));
          preOrderNode(node.left, callback);
          preOrderNode(node.right, callback);
        }
      };

      preOrderNode(this.root, callback);

      function callback(v) {
        return v;
      }

      return backs;
    }
    /**
     * 后序遍历
     * @returns {array}
     */

  }, {
    key: "postOrder",
    value: function postOrder() {
      var backs = [];

      var postOrderNode = function postOrderNode(node, callback) {
        if (node !== null) {
          postOrderNode(node.left, callback);
          postOrderNode(node.right, callback);
          backs.push(callback(node.key));
        }
      };

      postOrderNode(this.root, callback);

      function callback(v) {
        return v;
      }

      return backs;
    }
    /**
     * 层序遍历
     * @returns {array}
     */

  }, {
    key: "zOrder",
    value: function zOrder() {
      var node = this.root;
      var backs = [];
      var result = [node];

      var zOrderNode = function zOrderNode() {
        if (result.length) {
          var nodes = result;

          for (var i = 0; i < result.length; i++) {
            backs.push(result[i].key);
          }

          result = [];

          for (var j = 0; j < nodes.length; j++) {
            if (nodes[j].left !== null) {
              result.push(nodes[j].left);
            }

            if (nodes[j].right !== null) {
              result.push(nodes[j].right);
            }
          }

          zOrderNode();
        }
      };

      zOrderNode();
      return backs;
    }
    /**
     * 获取根节点的高度
     * @param {Node} node - 根节点
     * @returns {number}
     */

  }, {
    key: "getNodeHeight",
    value: function getNodeHeight(node) {
      if (node == null) {
        return 0;
      }

      var oLeft = this.getNodeHeight(node.left);
      var oRight = this.getNodeHeight(node.right);
      return 1 + Math.max(oLeft, oRight);
    }
    /**
     * 查找节点
     * @param {number} data - 节点值
     * @returns {Node}
     */

  }, {
    key: "find",
    value: function find(data) {
      var current = this.root;

      while (true) {
        if (data === current.key) {
          return current;
        }

        current = data < current.key ? current.left : current.right;

        if (current === null) {
          return null;
        }
      }
    }
    /**
     * 删除节点
     * @param {number} key - 节点值
     */

  }, {
    key: "remove",
    value: function remove(key) {
      var removeNode = function removeNode(node, data) {
        if (node === null) {
          return null;
        }

        if (data === node.key) {
          if (node.left === null && node.right === null) {
            return null;
          }

          if (node.left === null) {
            return node.right;
          }

          if (node.right === null) {
            return node.left;
          }
        } else if (data < node.key) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      };

      this.root = removeNode(this.root, key);
    }
  }]);

  return BinaryTree;
}();

export default BinaryTree;