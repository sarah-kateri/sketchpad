//Determines grid size by prompt.//
function makeGrid() {
    const container = document.querySelector('.container');
    let gridSize = prompt("How many squares per side in the sketchpad? Enter a number 1 to 100.");
    if (gridSize < 1 || gridSize > 100) {
        alert("Can't make sketchpad. Try again.");
    } else {
    for (let i = 0; i < gridSize; i++) {
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-container');
        container.appendChild(innerContainer);
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            innerContainer.appendChild(square);

            //Black & White button.//
            const bw = document.querySelector('.bw');
            bw.addEventListener('click', function (e) {
            square.addEventListener('mouseover', function (e) {
                square.style.cssText = 'background-color: black;'
                }); 
            });
            
            //Picks random color.//
            const random = () => Math.floor(Math.random() * 256);
            const r = random ();
            const g = random ();
            const b = random ();
            const rgb = 'rgb(' + r + ',' + g + ',' + b +')';
            
            //Rainbow button.//
            const rainbow = document.querySelector('.rainbow');
            rainbow.addEventListener('click', function(e) {
            square.addEventListener('mouseover', function (e) {
                square.style.backgroundColor = rgb;
                }); 
            });
            
            //Eraser button.//
            const eraser = document.querySelector('.eraser');
            eraser.addEventListener('click', function (e) {
            square.addEventListener('mouseover', function (e) {
                square.style.cssText = 'background-color: white;'
                }); 
            });

        }      
    }}  
} 
makeGrid(); 