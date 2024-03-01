
// // Function to generate HTML for a single cell
// function generateCell(row, col) {
//     return `<div class="cell" data-row="${row}" data-col="${col}"></div>`;
// }

// // Function to generate HTML for a row of cells
// function generateRow(row, width) {
//     let cellsHTML = '';
//     for (let col = 0; col < width; col++) {
//         cellsHTML += generateCell(row, col);
//     }
//     return `<div class="row">${cellsHTML}</div>`;
// }

// // Function to generate HTML for the entire board
// function generateBoard(height, width) {
//     let rowsHTML = '';
//     for (let row = 0; row < height; row++) {
//         rowsHTML += generateRow(row, width);
//     }
//     return rowsHTML;
// }

// // Call the function to generate the board and insert it into the "board" element
// const boardElement = document.getElementById('board');
// const height = 6; // Example height
// const width = 7; // Example width
// boardElement.innerHTML = generateBoard(height, width);
import{GameOfLifeModel} from "../model/model.js";
export class GameOfLifeView {
    constructor(model) {
        this.model = model;
        this.boardElement = document.querySelector('#board');
        this.createBoard();
    }

    createBoard() {
        // Clear any existing board
        const WIDTH=this.model.getWidth();
        const HEIGHT=this.model.getHeight();
        this.boardElement.innerHTML = '';
        

        // Create the grid dynamically
        for (let row = 0; row < this.model.getHeight(); row++) {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
            for (let col = 0; col < this.model.getWidth(); col++) {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                // Set data attributes for row and column
                cellElement.dataset.row = row;
                cellElement.dataset.col = col;
                rowElement.appendChild(cellElement);
            }
            this.boardElement.appendChild(rowElement);
        }
        this.boardElement.style.gridTemplateColumns=`repeat(${WIDTH}, 4px) `;
        // this.boardElement.computedStyleMap.gridTemplateRowss=`repeat(${HEIGHT}, 4px) `;
    }

    updateView() {
        const cells = this.boardElement.querySelectorAll('.cell');
        cells.forEach(cell => {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            const cellState = this.model.getCell(row, col);
            if (cellState) {
                cell.classList.add('alive');
            } else {
                cell.classList.remove('alive');
            }
        });
    }
    makeBoardClickable(){
        this.boardElement.addEventListener("click", this.boardClicked.bind(this));
    }
    
    boardClicked(event){
        if(event.target.classList.contains("cell")){
            const cell = event.target;
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            this.model.toggleCell(row, col);
            this.updateView();
        }
    }   
}


