/*
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

             (row-1,col)
                 ^
(row,col-1)<- (row,col)->(row,col+1)
                 v
            (row+1,col)
*/

const minimumIsland  = (grid) => {
    const visited = new Set();
    //becuase some grid is not square grid
    const row = grid.length;
    const col = grid[0].length;
    let minSize = Infinity;
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {

            const size = depthFirstExplore(grid,r,c,visited);
            //if the size is 0 -> it is not the island at all
            if(size > 0 && size < minSize) minSize = size;
        }
    }
    return minSize;
}
const depthFirstExplore = (grid, row, col, visited) => {
    //check the position is inbound/in the grid
    const rowInbounds = row >= 0 && row < grid.length;
    const colInbounds = col >= 0 && col < grid[0].length;

    if (!rowInbounds || !colInbounds) return 0;

    //if step on water, stop
    if (grid[row][col] === "W") return 0;

    const position = `${row},${col}`;
    if (visited.has(position)) return 0;
    visited.add(position);

    let size = 1;
    size += depthFirstExplore(grid, row - 1, col, visited);//up
    size += depthFirstExplore(grid, row + 1, col, visited);//down
    size += depthFirstExplore(grid, row, col - 1, visited);//left
    size += depthFirstExplore(grid, row, col + 1, visited);//right

    return size;
}
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
  console.log(minimumIsland(grid)); // -> 1