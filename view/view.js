

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
        const generations=document.querySelector("#generations");
        generations.value=`Generations: ${this.model.generations}`;
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


