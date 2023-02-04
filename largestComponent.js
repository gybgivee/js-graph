/*

Write a function, largestComponent, 
that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.
*/

const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;
    for (const node in graph) {
        const size = depthFirstExplore(graph, node, visited);
        if (size > largest) largest = size;
    }
    return largest;
}

const depthFirstExplore = (graph, current, visited) => {
    if (visited.has(String(current))) return 0;
    visited.add(String(current));

    //if it is a sigle node on its own , size = 1;
    let size = 1;
    for (const neighbor of graph[current]) {
        size += depthFirstExplore(graph, neighbor, visited);
    }
    return size;
}
const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  };
  console.log(largestComponent(graph));//4