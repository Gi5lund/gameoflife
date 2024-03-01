
export class GameOfLifeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Add event listener for each cell to toggle its state
        this.view.boardElement.addEventListener('click', event => {
            if (event.target.classList.contains('cell')) {
                const row = parseInt(event.target.dataset.row);
                const col = parseInt(event.target.dataset.col);
                this.toggleCellState(row, col);
            }
        });

        // Add event listener for a "step" button to progress to the next generation
        const stepButton = document.getElementById('step-button');
        stepButton.addEventListener('click', () => {
            this.model.updateGrid();
            this.view.updateView();
        });

        // Add event listener for a "start" button to start an automated simulation
        const startButton = document.getElementById('start-button');
        let intervalId;
        startButton.addEventListener('click', () => {
            if (!intervalId) {
                intervalId = setInterval(() => {
                    this.model.updateGrid();
                    this.view.updateView();
                }, 500); // Adjust the interval as needed
            }
        });

        // Add event listener for a "stop" button to stop the automated simulation
        const stopButton = document.getElementById('stop-button');
        stopButton.addEventListener('click', () => {
            clearInterval(intervalId);
            intervalId = null;
        });

        // Add event listener for a "reset" button to reset the grid to its initial state
        const resetButton = document.getElementById('reset-button');
        resetButton.addEventListener('click', () => {
            this.model.createGrid();
            this.view.updateView();
        });
        // Add event listener for a "random seed" button to randomly populate the grid
        const randomSeed=document.querySelector("#randomseed-button");
        const alivepercent=document.querySelector("#alivepercent");
        if(alivepercent){
            // if( alivepercent.value>1){
            //     alivepercent.value=alivepercent.value/100;
            // }
            randomSeed.addEventListener("click",()=>{
                this.model.randomSeed(alivepercent.value);
                this.view.updateView();
            });
        }else{
            randomSeed.addEventListener("click",()=>{
                this.model.randomSeed();
                this.view.updateView();
            });
        }
    }

    toggleCellState(row, col) {
        const currentState = this.model.getCell(row, col);
        this.model.setCell(row, col, !currentState);
        this.view.updateView();
    }
}
