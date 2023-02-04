const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return depthFirstHasPath(graph, nodeA, nodeB);
}



const breadthFirstHasPath =(graph,src,dst,visited = new Set())=> {
    const queue = [src];
    while (queue.length > 0) {
        //first in first out = shift() to get first array 
        const current = queue.shift();
        if (current === dst) return true;
    
        for (const neighbor of graph[current]) {
          
            queue.push(neighbor);
        }
    }
    return false;
}
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

const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];
  
 console.log(undirectedPath(edges, 'a', 'b')); // -> true