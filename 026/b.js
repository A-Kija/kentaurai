console.log('Welcome to DOM! II');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', _ => {

    // kodas

    const body = document.querySelector('body');

    // body.innerHTML = '<h1>DOM II</h1>';

    // let kaRodyti;

    // if (rand(0, 1) == 0) {
    //     kaRodyti = '<h1>DOM II</h1>';
    // } else {
    //     kaRodyti = '<h2>Sub DOM 2</h2>';
    // }

    // body.innerHTML = kaRodyti;

    // body.innerHTML = rand(0, 1) ? '<h1>DOM II</h1>' : '<h2>Sub DOM 2</h2>';

    // kodas 3 uždavinio

    // if (document.querySelector('h1')) {
    //     document.querySelector('h1').innerHTML = '<span>Valio!</span>';
    // }
    // if (document.querySelector('h2')) {
    //     document.querySelector('h2').innerHTML = '<span>Valio!</span>';
    // }


    const animals = document.querySelectorAll('.animals span');

    // console.log(animals);

    animals.forEach(a => console.log(a.innerText));

    const animalArray = [...animals];

    console.log(animalArray);


    // animals.forEach(a => a.innerText == 'Rabbit' && (a.innerText = 'Bunny'));

    animals.forEach(a => {
        if (a.innerText == 'Rabbit') {
            a.innerText = 'Bunny';
        }
    });

    const h1 = document.querySelector('h1');

    h1.style.color = 'skyblue';
    h1.style.fontSize = '52px';


    // setInterval(_ => {
    //     h1.style.color = h1.style.color == 'skyblue' ? 'crimson' : 'skyblue'
    // }, 1000);


    const blueRed = _ => {
        if (h1.style.color == 'skyblue') {
            h1.style.color = 'crimson';
        } else {
            h1.style.color = 'skyblue';
        }
    }

    // setInterval(blueRed, 1000);

    const bin = document.querySelector('.bin');

    let divs = '';

    for (let i = 0; i < 222; i++) {
        divs += '<div></div>'
    }

    bin.innerHTML = divs;


    const balls = document.querySelectorAll('.bin div');

    const ballGo = _ => {
        balls.forEach(b => {
            if (rand(0, 1)) {
                b.style.top = rand(0, 450) + 'px';
                b.style.left = rand(0, 450) + 'px';
            }
        });

    }

    setInterval(ballGo, 500);


});