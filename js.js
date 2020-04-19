const grid = document.getElementById('grid');


for (let i = 0; i < 500; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
}

let makeActive = function () {
    const squares = document.querySelectorAll('.square');

    for (let i = 0; i< squares.length; i++) {
        const item = squares[i];
        if (item.classList.contains('active') === false) {
            item.classList.add('active');
            break;
        }
    }
};

let a = setInterval(makeActive, 1);