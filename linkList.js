class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.length = 0
    }
    append(ele) {
        if (this.head === null) {
            this.head = new Node(ele)
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = new Node(ele)
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
                node.next = current
                this.head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
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
