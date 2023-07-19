// draw a 16x16 grid 

const units = 16;
const gridContainer = document.querySelector('.grid-container');

drawGrid();

function drawGrid() {
    for (let i = 0; i < units * units; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-element');
        gridContainer.appendChild(square);
    }
}

