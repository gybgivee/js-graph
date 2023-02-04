/*
Write a function, islandCount, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the number of islands on the grid. 
An island is a vertically or horizontally connected region of land.

             (row-1,col)
                 ^
(row,col-1)<- (row,col)->(row,col+1)
                 v
            (row+1,col)
*/

const islandCount = (grid) => {
    const visited = new Set();
    //becuase some grid is not square grid
    const row = grid.length;
    const col = grid[0].length;
    let count = 0;
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {

            if (depthFirstExplore(grid, r, c, visited)===true) count += 1;
        }
    }
    return count;
}
const depthFirstExplore = (grid, row, col, visited) => {
    //check the position is inbound/in the grid
    const rowInbounds = row >= 0 && row < grid.length;
    const colInbounds = col >= 0 && col < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;

    //if step on water, stop
    if (grid[row][col] === "W") return false;

    const position = `${row},${col}`;
    if (visited.has(position)) return false;
    visited.add(position);


    depthFirstExplore(grid, row - 1, col, visited);//up
    depthFirstExplore(grid, row + 1, col, visited);//down
    depthFirstExplore(grid, row, col - 1, visited);//left
    depthFirstExplore(grid, row, col + 1, visited);//right

    return true;
}
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3