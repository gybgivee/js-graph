/*
Good with Breath First Search
connected components count
Write a function, connectedComponentsCount, 
that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph.
*/
const connectedComponentsCount = (graph) =>{
    const visited = new Set();
    let count = 0;
    for (const node in graph) {
       if(depthFirstExplore(graph, node,visited)) count++;
    }
    return count;
}
const depthFirstExplore = (graph,current,visited)=>{
    if(visited.has(String(current))) return false;
    visited.add(String(current));

    for (const neighbor of graph[current]) {
        depthFirstExplore(graph, neighbor, visited);
    }
    return true;
}

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  };
console.log(connectedComponentsCount(graph));//2
