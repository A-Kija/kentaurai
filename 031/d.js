console.log('Welcome to DOM! VII');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener('load', _ => {

    // u1

    const h21 = document.querySelector('h2');
    const h22 = document.querySelector('h2 + h2');
    const b1 = document.querySelector('.u1');

    b1.addEventListener('click', _ => {

        const r1 = rand(1, 6);
        const r2 = rand(1, 6);

        if (r1 == r2) {
            h21.style.color = 'crimson';
            h22.style.color = 'crimson';
        } else {
            h21.style.color = 'black';
            h22.style.color = 'black';
        }

        h21.innerText = r1;
        h22.innerText = r2;

    });

    // u2

    const h3 = document.querySelector('h3');
    const b2 = document.querySelector('.u2');
    const arr = [];


    b2.addEventListener('click', _ => {

        arr.push(rand(1, 10));
        console.log(arr);

        let sum = 0;

        arr.forEach(d => sum += d);

        h3.innerText = sum;


    });

    // u3

    const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
    const ul = document.querySelector('ul');

    africa.forEach(a => {
        if (a) {
            const li = document.createElement('li');
            const text = document.createTextNode(a);
            li.appendChild(text);
            ul.appendChild(li);
        }
    });

    // u4

    const h5 = document.querySelector('h5');
    const i1 = document.querySelector('.i1');
    const i2 = document.querySelector('.i2');
    const u41 = document.querySelector('.u41');
    const u42 = document.querySelector('.u42');


    u41.addEventListener('click', _ => {

        const value1 = parseFloat(i1.value);
        const value2 = parseFloat(i2.value);

        const rez = value1 + value2;

        h5.innerText = rez;

    });

    u42.addEventListener('click', _ => {

        const value1 = parseFloat(i1.value);
        const value2 = parseFloat(i2.value);

        const rez = value1 - value2;

        h5.innerText = rez;

    });

    // u5

    const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
    const australiaUl = document.querySelector('.australia');

    let html = '';

    australia.forEach(a => {

        if (a != 'Dingo') {
            html += `<li>${a}</li>`;
        } else {
            html += `<li style="color:skyblue;">${a}</li>`;
        }

    });

    australiaUl.innerHTML = html;



    const animal1 = 'Antis';
    const animal2 = 200;
    const animal3 = {
        a: 'Antis',
        w: 200
    };

    const zoo = document.querySelector('.zoo');


    zoo.dataset.a1 = animal1;
    zoo.dataset.a2 = animal2;
    zoo.dataset.a3 = JSON.stringify(animal3);

    const readAnimal1 = zoo.dataset.a1;
    const readAnimal2 = parseFloat(zoo.dataset.a2);
    const readAnimal3 =  JSON.parse(zoo.dataset.a3);

    console.log(readAnimal1, typeof readAnimal1);
    console.log(readAnimal2, typeof readAnimal2);
    console.log(readAnimal3, typeof readAnimal3);




});


