// draw a 16x16 grid 

const units = 16;
const gridContainer = document.querySelector('.grid-container');

drawGrid();

const gridElements = document.querySelectorAll('.grid-element');
gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', colorElement));

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

function drawGrid() {
    for (let i = 0; i < units * units; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-element');
        gridContainer.appendChild(square);
    }
}

function colorElement() {
    this.classList.add('grid-element-color');
}

function clearGrid() {
    console.log(clearButton);
    gridElements.forEach(gridElement => 
        gridElement.classList.remove('grid-element-color'));
}