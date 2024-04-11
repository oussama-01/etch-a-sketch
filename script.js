


// creating a 16*16 grid of square divs

const container = document.querySelector('.container');

function createGrid(squareNumbers = 16, squareWidth = '30px') {


    for (let i = 0; i < squareNumbers; i++) {
        const hdiv = document.createElement('div');
        hdiv.classList.add('hdiv');
        container.appendChild(hdiv);
        for (let i = 0; i < squareNumbers; i++) {
            const square = document.createElement('div');
            square.classList.add('squares');
            square.style.width = squareWidth;
            square.style.height = squareWidth;

            hdiv.appendChild(square);
        }

    }

}

createGrid();
setHoverEffect();

// Set up a hover effect for the squares

function setHoverEffect() {
    const squares = document.querySelectorAll('.squares');

    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        })
    })

}


// adding button for number of squares per side

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const squareNumbers = prompt('Numbers of squares');
    if (squareNumbers >100) return alert('Numbers of squares should be less than 101');

    const squareWidth = `${container.clientWidth / squareNumbers}px`;
    console.log([ squareNumbers, squareWidth]);

    // to remove the old grid
    const hdiv = document.querySelectorAll('.hdiv');
    hdiv.forEach(h => h.remove());

    createGrid(squareNumbers, squareWidth);
    setHoverEffect();

})