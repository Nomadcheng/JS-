class Graph {
    constructor() {
        this.AdjList = new Map();
    }

    // 顶点
    addVertex(vertex) {
        if (!this.AdjList.has(vertex)) {
            this.AdjList.set(vertex, []);
        } else {
            throw 'Already Exist!!!';
        }
    }

    // 线
    addEdge(vertex, node) {
        this.addEdge(vertex, node) {
            if (this.AdjList.has(vertex)) {
                // 确保添加的边尚不存在
                if (this.AdjList.has(node)) {
                    let arr = this.AdjList.get(vertex)
                    if (!arr.includes(node)) {
                        arr.push(node);
                    }
                } else {
                    throw `Can't add non-existing vertex ->'${node}'`;
                }
            } else {
                throw `You should add '${vertex}' first`;
            }
        }
    }

    print() {
        for (let [key, value] of this.AdjList) {
            console.log(key, value);
        }
    }

    createVisitedObject() {
        let arr = {}
        for (let key of this.AdjList.keys()) {
            arr[key] = false;
        }
        return arr;
    }

    bfs(startingNode) {
        let visited = this.createVisitedObject();
        let q = [];
        visited[startingNode] = true;
        q.push(startingNode);

        while (q.length) {
            let current = q.pop()
            console.log(current);

            let arr = this.AdjList.get(current);

            for (let elem of arr) {
                if (!visited[elem]) {
                    visited[elem] = true;
                    q.unshift(elem);
                }
            }
        }
    }
}
