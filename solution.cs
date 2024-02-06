Here is a JavaScript solution for cloning a graph using Depth First Search (DFS):

```javascript
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

function cloneGraph(node) {
    if (!node) return node;
    const map = new Map();
    return dfs(node);

    function dfs(node) {
        if (map.has(node)) return map.get(node);
        const clone = new Node(node.val);
        map.set(node, clone);
        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const clonedGraph = cloneGraph(node1);
console.log(clonedGraph);
```

This code first defines a Node class for the graph nodes. Then it defines a function `cloneGraph` that uses Depth First Search to clone the graph. The `cloneGraph` function uses a Map to keep track of visited nodes and avoid cycles. The `dfs` function is a helper function that performs the actual Depth First Search. It creates a clone of the current node, adds it to the map, and then recursively clones all the neighbors of the current node. The cloned graph is then logged to the console.