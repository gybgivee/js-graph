/*
-----------> Breath First is good for shortest path 
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (startNode, nodeB). 
The function should return the length of the shortest path between A and B. 
Consider the length as the number of edges in the path, not the number of nodes.
 If there is no path between A and B, then return -1.
*/

const shortestPath = (edges, startNode, targetNode) => {
    const graph = buildGraph(edges);

    const queue = [[startNode, 0]];
    const visited = new Set([startNode]);

    while (queue.length > 0) {
        const [currentNode, distance] = queue.shift();
        if (currentNode === targetNode) return distance;
        for (const neighbor of graph[currentNode]) {
       
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                //neighbor distance is greater than 1
                queue.push([neighbor, distance + 1]);
            }

        }

    }
    return -1;
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
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
console.log(shortestPath(edges, 'w', 'z')); // -> 2
console.log(shortestPath(edges, 'w', 'a')); //-1