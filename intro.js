/*
To make it easier should transform graph to adjacent list
type of graph
1.Cycle 
2.Acycle : no cycle
Ways to travel
1.Depth first traversal - Stack(recursive): you explore onw directio as far as possible before switching direction (flavour one direction)
2.Breadth first traversal - Queue(iterative): explore all of immediate neighbors, and just keep applying that behavior (explore all direction evenly)
 
*/

const depthFirstSearch = (graph,source)=>{
    const stack = [source];
    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}
const breadthFirstSearch = (graph,source)=>{
    const queue = [source];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}
const graph = {
   a:['b','c'],
   b:['d'],
   c:['e'],
   d:['f'],
   e:[],
   f:[]
}
console.log("---depthFirstSearch");
depthFirstSearch(graph,'a');
console.log("---breathFirstSearch");
breadthFirstSearch(graph,'a');