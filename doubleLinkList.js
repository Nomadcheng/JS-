class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    append(ele) {
        let node = new Node(ele)
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
    }
    insert(position, ele) {
        if (position >= 0 && position <= this.length) {
            let node = new Node(ele),
                current = this.head,
                previous,
                index = 0;
            if (index === position) {
                if (this.head === null) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node //NEW
                    this.head = node
                }
            } else if (position === this.length) {
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.length++
        } else {
            return false
        }
    }
    indexOf(ele) {
        let current = this.head,
            index = 0;
        while (current) {
            if (ele === current.value) {
                return index
            }
            current = current.next
            index++
        }
        return -1;
    }
    removeAt(position) {
        if (position >= 0 && position < this.length) {
            let current = this.head,
                index = 0,
                previous;
            if (position === index) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
        } else {
            return false
        }
    }
    remove(ele) {
        let position = this.indexOf(ele)
        this.removeAt(position)
    }
    isEmpty() {
        return !this.length
    }
    size() {
        return this.length
    }
    toString() {

    }
}
