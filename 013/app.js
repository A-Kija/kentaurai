console.log('Labas, mano mylimi uždaviniai!');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Konsolėje išspausdinti žodį "Labas" atsitiktinį, nuo 5 iki 10, kiekį kartų.

let what1 = rand(5, 10);

for (let i = 0; i < what1; i++) {
    console.log('Labas');
}

// 2. Patobulinti 1 uždavinio kodą, kad rezultatas būtų viena eilutė su visais 'Labas' žodžiais.

let what2 = rand(5, 10);
let all = '';

for (let i = 0; i < what2; i++) {
    all = all + 'Labas ';
    // if (i == what2 - 1) {
    //     console.log('Pabaiga: ' + all);
    // }
}

console.log(all);


// 3. Konsolėje išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.

let what3 = rand(0, 4);
console.log(what3);

// 4. Konsolėje 5 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.

console.clear();

for (let i = 0; i < 5; i++) {
    console.log(rand(0, 4));
}

// 5. Konsolėje 7 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.

console.clear();

for (let i = 0; i < 7; i++) {
    console.log(rand(0, 4));
}

// 6. Konsolėje 5 arba 7 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.

console.clear();

let what6 = rand(0, 1) ? 5 : 7;

for (let i = 0; i < what6; i++) {
    console.log(rand(0, 4));
}

// 7. Konsolėje 5 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4. Dar išspausdinti jų sumą.

console.clear();
let sum7 = 0;

for (let i = 0; i < 5; i++) {
    let sk = rand(0, 4);
    console.log(sk);
    sum7 += sk;
}

console.log('Suma:', sum7);

console.clear();

let sviesoforas = rand(0, 2);
let spalva = sviesoforas === 0 ? 'raudona' : sviesoforas === 1 ? 'geltona' : 'zalia';

console.log('Sviesoforas:', spalva);

if (spalva === 'raudona') {
    console.log('Stovime');
} else if (spalva === 'geltona') {
    console.log('Ruošiamės');
} else if (spalva === 'zalia') {
    console.log('Eik!');
}

switch (spalva) {
    case 'raudona':
        console.log('Stovime');
        break;
    case 'geltona':
        console.log('Ruošiamės');
        break;
    case 'zalia':
        console.log('Eik!');
}

console.clear();

let box = rand(1, 4);
let size;
if(box === 1) {
    size = 'S';
}
if(box === 2) {
    size = 'M';
}
if(box === 3) {
    size = 'L';
}
if(box === 4) {
    size = 'XL';
}

console.log('Box:', size);

if (size === 'S') {
    console.log('Tikriname S');
}
if (size === 'M' || size === 'S') {
    console.log('Tikriname M');
}
if (size === 'L' || size === 'M' || size === 'S') {
    console.log('Tikriname L');
}
if (size === 'XL' || size === 'L' || size === 'M' || size === 'S') {
    console.log('Tikriname XL');
}


// for (let i = 0; i < 4; i++) {

    switch (size) {
        case 'S':
            console.log('Tikriname S');
        case 'M':
            console.log('Tikriname M');
        case 'L':
            console.log('Tikriname L');
        case 'XL':
            console.log('Tikriname XL');
    }

// }

console.clear();

let vidinis;
let kartai = 0;
let kartaiDidelis = 0;
let kartaiMazas = 0;

do {
    kartaiDidelis++;
    vidinis = rand(5, 10);

    if (vidinis === 5) {
        kartai++
    } else {
        kartai = 0;
    }
    
    console.log('Vidinis:', vidinis);

    for (let i = 0; i < vidinis; i++) {
        kartaiMazas++;
        // console.log('A');
    }

} while (kartai != 3);

console.log('Kartai didelis:', kartaiDidelis);
console.log('Kartai mazas:', kartaiMazas);