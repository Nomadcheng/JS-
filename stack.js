class Stack {
    constructor() {
        this.list = []
    }
    push(...item) {
        this.list.push(...item)
    }
    pop() {
        this.list.pop()
    }
}