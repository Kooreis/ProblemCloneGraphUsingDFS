function cloneGraph(node) {
    if (!node) return node;
    const map = new Map();
    return dfs(node);
}