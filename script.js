// draw a 16x16 grid 

const units = 16;

drawGrid();

function drawGrid() {
    for (let i = 0; i < units; i++) {
        drawRow();
    }
}

function drawRow() {
    for (let i = 0; i < units; i++) {
        drawSquare();
    }
}

function drawSquare() {
    
}