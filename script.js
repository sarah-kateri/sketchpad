const button = document.querySelector('button');
const container = document.querySelector('.container');

function makeGrid() {
    let gridSize = prompt("How many squares per side is the grid?");
    if (gridSize > 100 || gridSize < 1) {
        alert("Enter a number between 1 and 100.")
    }
    for (let i = 0; i < gridSize; i++) {
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-container');
        container.appendChild(innerContainer);
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            innerContainer.appendChild(square);
            square.addEventListener('mouseover', function (e) {
                square.style.cssText = 'background-color: black;'
            });
        }       
    }  
}    


