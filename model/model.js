export class GameOfLifeModel {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.grid = this.createGrid();
        this.generations=0;
    }

    createGrid() {
        const grid = [[]];
        for (let row = 0; row < this.height; row++) {
            const newRow = [];
            for (let col = 0; col < this.width; col++) {
                newRow.push(false); // Initialize all cells as dead
            }
            grid.push(newRow);
        }
        return grid;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getCell(row, col) {
        return this.grid[row][col];
    }

    setCell(row, col, value) {
        this.grid[row][col] = value;
    }

    // Method to update the grid based on the rules of Conway's Game of Life
    updateGrid() {
        const newGrid = this.createGrid();
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                const neighbors = this.countNeighbors(row, col);
                if (this.grid[row][col]) { // If cell is alive
                    if (neighbors < 2 || neighbors > 3) {
                        newGrid[row][col] = false; // Cell dies due to underpopulation or overpopulation
                    } else {
                        newGrid[row][col] = true; // Cell survives
                    }
                } else { // If cell is dead
                    if (neighbors === 3) {
                        newGrid[row][col] = true; // Cell becomes alive due to reproduction
                    }
                }
            }
        }
        this.grid = newGrid;
        this.generations++;
    }

    // Method to count the number of live neighbors for a given cell
    countNeighbors(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // Skip the cell itself
                const neighborRow = row + i;
                const neighborCol = col + j;
                if (neighborRow >= 0 && neighborRow < this.height && neighborCol >= 0 && neighborCol < this.width) {
                    if (this.grid[neighborRow][neighborCol]) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
    toggleCellState(row, col) {
        this.grid[row][col] = !this.grid[row][col];
    }
    randomSeed(alivepercent){
        if(!alivepercent){
            alivepercent=0.5;
        }
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                this.grid[row][col] = Math.random() >(1-alivepercent);
            }
        }
    }
    resetGrid(){
        this.grid = this.createGrid();
        this.generations=0;
    }
}
