let container = document.getElementById('container');

function grid(e) {
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
            row.appendChild(square);
        }
    })
}

let coloringGreed = document.getElementsByClassName('coloringGreed');

for (let i = 0; i < coloringGreed; i++) {
    coloringGreed[i].addEventListener('mouseover', )
}

