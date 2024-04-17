console.log('Welcome to DOM! V');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const obj = {
    smartAnimal32: 'Fox',
    funnyAnimal88: 'Racoon',
    bigAnimal105: 'Wolf'
}

const regex = /\d+/g;


window.addEventListener('load', _ => {

    
// for (const a in obj) {

//     const found = a.match(regex);

//     console.log(obj[a], found[0]);
// }


const i1 = document.querySelector('.i1');

const btn = document.querySelector('button');


btn.addEventListener('click', _ => {
    const v =  i1.value;
    console.log('CLICK', v);
});

i1.addEventListener('input', _ => {
    const v =  i1.value;
    console.log('INPUT', v);
});


const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const mult = document.querySelector('.calc button');


mult.addEventListener('click', _ => {

    const v1 =  parseFloat(a1.value);
    const v2 =  parseFloat(a2.value);

    a1.style.borderColor = 'black';
    a2.style.borderColor = 'black';

    if (isNaN(v1) || isNaN(v2)) {
        console.log('Įvesti ne skaičiai');
        if (isNaN(v1)) {
            a1.style.borderColor = 'crimson';
        }
        if (isNaN(v2)) {
            a2.style.borderColor = 'crimson';
        }
    
    } else {
        const rez = v1 * v2;
        console.log('REZ:', rez);
    }

});


const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


parent.addEventListener('click', _ => {

    parent.style.backgroundColor = 'crimson';

});


child.addEventListener('click', event => {


    event.stopPropagation();


    child.style.backgroundColor = 'brown';

});

});

const smallUserword = "user".sub();


console.log(smallUserword);

