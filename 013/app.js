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