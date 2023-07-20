// draw a 16x16 grid 
const DEFAULTUNITS = 16;

let units = DEFAULTUNITS;
const gridContainer = document.querySelector('.grid-container');
let gridElements = document.querySelectorAll('.grid-element');
gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', colorElement));


drawGrid();

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener('click', resizeGrid);

function drawGrid() {
    for (let i = 0; i < units * units; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-element');
        gridContainer.appendChild(square);
    }
    gridContainer.style = `grid-template-columns: repeat(${units}, 1fr);
                            grid-template-rows: repeat(${units}, 1fr)`;
    // re-initialize gridElements and add event listener
    // to each grid element
    gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', colorElement));
}

function colorElement() {
    this.classList.add('grid-element-color');
}

function clearGrid() {
    gridElements.forEach(gridElement => 
        gridElement.classList.remove('grid-element-color'));
}

function resizeGrid() {
    units = prompt('Enter number of rows and columns: ');
    drawGrid();
}