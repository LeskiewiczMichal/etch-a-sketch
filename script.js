let container = document.getElementById('container');

// generate grid 
grid();
function grid(e = 16) {
    for (let i = 0; i < e; i++) {
        // create i rows in containers
        let row = document.createElement('div');
        row.className = 'row';
        row.style.display = 'flex';
        row.style.border = '1px solid black';
        row.style.height = '100%'
        container.appendChild(row);
    }

    let rowsList = document.querySelectorAll('.row');
    rowsList.forEach((row) => {
        for (let i = 0; i < e; i++) {
            let square = document.createElement('div');
            square.className = 'coloringGreed';
            square.style.border = '1px solid black';
            square.style.width = '100%';
            square.addEventListener('mouseover', colorOneSquare);
            row.appendChild(square);
        }
    })
}

function colorOneSquare(e) {
    e.target.style.backgroundColor = 'black';
}

let resetButton = document.getElementById('change-grid');

resetButton.addEventListener('click', resetGrid);

// remove grid and make a new one
function resetGrid() {
    const rowList = document.querySelectorAll('.row');

    for (const elem of rowList) {
        elem.remove();
    }

    // let user choose new grid size, can't be bigger than 80
    let chooseGridPrompt = prompt('What size of grid do you want?');
    while (chooseGridPrompt > 80) {
        chooseGridPrompt = prompt('Please select a number below 80');
    }
    grid(chooseGridPrompt);
}
