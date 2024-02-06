Here is a TypeScript solution for cloning a graph using Depth First Search (DFS):

```typescript
class Node {
    val: number;
    neighbors: Node[];

    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val === undefined ? 0 : val);
        this.neighbors = (neighbors === undefined ? [] : neighbors);
    }
}

function cloneGraph(node: Node | null): Node | null {
    if (node == null) {
        return null;
    }

    let map: Map<Node, Node> = new Map();
    return dfs(node, map);
}

function dfs(node: Node, map: Map<Node, Node>): Node {
    if (map.has(node)) {
        return map.get(node)!;
    }

    let clone = new Node(node.val, []);
    map.set(node, clone);

    for (let neighbor of node.neighbors) {
        clone.neighbors.push(dfs(neighbor, map));
    }

    return clone;
}

// Test the solution
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

let clone = cloneGraph(node1);
console.log(clone);
```

This solution first checks if the node is null, if it is, it returns null. If it's not, it creates a new Map to keep track of the nodes that have been visited. It then calls the dfs function to clone the graph. The dfs function checks if the node has been visited, if it has, it returns the cloned node. If it hasn't, it creates a new node with the same value and empty neighbors, adds it to the map, and then recursively calls dfs for each of its neighbors. Finally, it returns the cloned node.