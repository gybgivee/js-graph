
//Write a function, has Path, that takes in an object reprefenting the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

//Graph search max edges will be node^2, because every node can only have maximum of 2 edges, Time:O(n^2),Space:O(n)

const depthFirstHasPath = (graph, src, dst) => {
    if (src === dst) return true;
    for (let neighbor of graph[src]) {
        if (depthFirstHasPath(graph, neighbor, dst) === true) return true;
    }
    return false;
}
const breadthFirstHasPath = (graph, src, dst) => {
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
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}
console.log(depthFirstHasPath(graph, 'f', 'k'));
console.log(depthFirstHasPath(graph, 'h', 'k'));
console.log(breadthFirstHasPath(graph, 'f', 'k'));
console.log(depthFirstHasPath(graph, 'h', 'k'));