//need varible to remember the visited path with the cycle graph
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;

        //if it is a first time, 
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        //undirected graph (can travel both way)
        graph[a].push(b);
        graph[b].push(a);

    }

    return graph;
}
console.log(buildGraph(edges));