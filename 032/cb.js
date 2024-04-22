const figures = [
    { id: 1, name: 'one', color: 'red', figure: 'circle' },
    { id: 2, name: 'two', color: 'green', figure: 'triangle' },
    { id: 3, name: 'three', color: 'blue', figure: 'square' },
    { id: 4, name: 'four', color: 'yellow', figure: 'circle' },
    { id: 5, name: 'five', color: 'orange', figure: 'triangle' },
    { id: 6, name: 'six', color: 'gray', figure: 'square' },
    { id: 7, name: 'seven', color: 'black', figure: 'circle' },
    { id: 8, name: 'eight', color: 'brown', figure: 'triangle' },
    { id: 9, name: 'nine', color: 'skyblue', figure: 'square' },
];

const repaintFigures = _ => {
    const bin = document.querySelector('.bin');
    bin.innerHTML = '';
    const paintIds = [];
    document.querySelectorAll('input').forEach(i => {
        if (i.checked) {
            paintIds.push(parseInt(i.value));
        }
    });

    paintIds.forEach(id => {
        const f = figures.find(f => f.id == id);
        const fig = document.createElement('div');
        fig.classList.add(f.figure);
        if (f.figure == 'triangle') {
            fig.style.borderBottomColor = f.color;
        } else {
            fig.style.backgroundColor = f.color;
        }
        const span = document.createElement('span');
        const number = document.createTextNode(f.id);
        span.appendChild(number);
        fig.appendChild(span);
        bin.appendChild(fig);
    });
}

window.addEventListener('load', _ => {

    const defaultCb = ['five', 'seven', 'nine'];

    const cb = document.querySelector('section');

    figures.forEach(f => {
        const div = document.createElement('div');
        div.classList.add('holder');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.value = f.id;
        const fig = document.createElement('div');
        fig.classList.add(f.figure);
        fig.classList.add('small');
        if (f.figure == 'triangle') {
            fig.style.borderBottomColor = f.color;
        } else {
            fig.style.backgroundColor = f.color;
        }
        if (defaultCb.includes(f.name)) {
            input.checked = true;
        }
        div.appendChild(input);
        div.appendChild(fig);
        cb.appendChild(div);
    });

    repaintFigures();

    document.querySelectorAll('input').forEach(i => {
        i.addEventListener('change', _ => {
            repaintFigures();
        });
    })

});