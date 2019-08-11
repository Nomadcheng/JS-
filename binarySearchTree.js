const insertNode = Symbol('insertNode')
const inOrderTraverseNode = Symbol('inOrderTraverseNode')
const preOrderTraverseNode = Symbol('preOrderTraverseNode')
const postOrderTraverseNode = Symbol('postOrderTraverseNode')
const searchNode = Symbol('searchNode')
const removeNode = Symbol('removeNode')
const findMinNode = Symbol('findMinNode')

class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    insert(key) {
        let newNode = new Node(key)

        // 判断是否是第一个节点，如果作为根节点保存。不是调用insertNode方法
        if (this.root === null) {
            this.root = newNode
        } else {
            this[insertNode](this.root, newNode)
        }
    }

    // 判断两个节点的大小，根据二叉搜索树的特点左子树上所有结点的值均小于它的根结点的值
    // 右子树上所有的值均大于它的根结点的值
    [insertNode](node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this[insertNode](node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this[insertNode](node.right, newNode)
            }
        }
    }

    getRoot() {
        return this.root
    }

    search(key) {
        return this[searchNode](this.root, key)
    }

    [searchNode](node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return this[searchNode](node.left, key)
        } else if (key > node.key) {
            return this[searchNode](node.right, key)
        } else {
            return true
        }
    }

    // 中序遍历，左-根-右
    inOrderTraverse(callback) {
        this[inOrderTraverseNode](this.root, callback)
    }

    [inOrderTraverseNode](node, callback) {
        if (node !== null) {
            this[inOrderTraverseNode](node.left, callback)
            callback(node.key)
            this[inOrderTraverseNode](node.right, callback)
        }
    }

    // 前序遍历，根-左-右
    preOrderTraverse(callback) {
        this[preOrderTraverseNode](this.root, callback)
    }

    [preOrderTraverseNode](node, callback) {
        if (node !== null) {
            callback(node.key)
            this[preOrderTraverseNode](node.left, callback)
            this[preOrderTraverseNode](node.right, callback)

        }
    }

    // 后序遍历，左-右-根
    postOrderTraverse(callback) {
        this[postOrderTraverse](this.root, callback)
    }

    [postOrderTraverseNode](node, callback) {
        if (node !== null) {
            this[postOrderTraverseNode](node.left, callback)
            this[postOrderTraverseNode](node.right, callback)
            callback(node.key)
        }
    }

    min() {
        let node = this.root
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    max() {
        let node = this.root
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    remove(key) {
        this.root = this[removeNode](this.root, key)
    }

    [findMinNode](node) {
        while (node && node.left !== null) {
            node = node.left
        }
        return node
    }

    [removeNode](node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = this[removeNode](node.left, key)
            return node
        } else if (key > node.key) {
            node.right = this[removeNode](node.right, key)
            return node
        } else {
            //处理移除结点有三种特殊情况
            //1 - 叶子节点
            //2 - 只有一个孩子的节点
            //3 - 有两个孩子的节点
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            let aux = this[findMinNode](node.right);
            node.key = aux.key;
            node.right = this[removeNode](node.right, aux.key);
            return node;
        }
    }
}
