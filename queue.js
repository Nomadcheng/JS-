class Queue {
    constructor() {
        this.list = []
    }
    enqueue(...item) {
        this.list.unshift(...item)
    }
    dequeue() {
        this.list.pop()
    }
}

