console.log('Welcome to DOM!');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', _ => {


    const div1 = document.querySelector('div');
    const div2 = document.querySelector('.ate');

    console.log(div1, div2);

    const x = document.querySelector('a');


    const h2 = document.querySelector('h2 + h2');

    console.log(h2);

    const iTag = document.querySelector('span i + i');

    console.log(iTag);

    let textInside = iTag.innerText;

    console.log(textInside);

    textInside += '-------*';

    iTag.innerText = textInside;

    h2.innerText = 'pakeistas';

    const h3 = document.querySelector('h3');

    h3.innerText = 'Vienas';

    document.querySelector('h3 + h3').innerText = 'Du';


    const valio = document.querySelector('.valio');

    console.log(valio.innerHTML);

    valio.innerHTML = '<b>888</b>';


    const ul = document.querySelector('ul');

    ul.innerHTML = '<li>Pirmasis</li>';


    const ol = document.querySelector('ol');

    // ol.innerHTML = '<li>Zuikis</li><li>Katinas</li>';

    ol.innerHTML = `
        <li>Zuikis</li>
        <li>Katinas</li>
    `;


    const big = document.querySelector('.big');

    let z = '';

    for (let i = 0; i < 10; i++) {
        z += '<li>Zuikis</li>';
    }

    // console.log(z);

    big.innerHTML = z;

  
    const random = document.querySelector('.random');

    let r = '';

    for (let i = 0; i < 10; i++) {
        r += '<li>' + rand(10, 99) + '</li>';
    }

    random.innerHTML = r;




});