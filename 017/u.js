function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('Sveiki, čia yra 017/u.js');


const vienas = [];
const du = [];
const trys = [];

const raides = ['A', 'B', 'C', 'D'];



for (let i = 0; i < 50; i++) {
    vienas.push(raides[rand(0, 3)]);
    du.push(raides[rand(0, 3)]);
    trys.push(raides[rand(0, 3)]);
}

console.log(vienas, du, trys);


const bendras = [];

for (let i = 0; i < 50; i++) {
    bendras.push(vienas[i] + du[i] + trys[i]);
}

console.log(bendras);

const unikalios = [];

for (let i = 0; i < 50; i++) {
    if (-1 == unikalios.indexOf(bendras[i])) {
        unikalios.push(bendras[i]);
    }
}

console.log(unikalios);

const unikaliosPo1 = [];

for (let i = 0; i < unikalios.length; i++) {

    const nuo = bendras.indexOf(unikalios[i]);
    if (-1 == bendras.indexOf(unikalios[i], nuo + 1)) {
        unikaliosPo1.push(unikalios[i]);
    }
    
}

console.log('unikaliosPo1', unikaliosPo1);

console.clear();

// 1 padaryti masyvą iš skaičių nuo 1 iki 100

const skaiciai = [];

for (let i = 0; i < 100; i++) {
    skaiciai.push(i + 1);
}




// 2 Skaičius kurie dalinasi iš 3 pakeiskite į raidę "C"

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 == 0) {
        skaiciai[i] = 'C';
    }
}

// 3 Skaičius kurie dalinasi iš 7 pakeiskite į raidę "B"

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 7 == 0) {
        skaiciai[i] = 'B';
    }
}

// 4 Padauginti visus skaičius iš 5

for (let i = 0; i < skaiciai.length; i++) {
   if (typeof(skaiciai[i]) == 'number') {
        skaiciai[i] = skaiciai[i] * 5;
   }
}

// 5 Pakeisti raides į jų indeksus

for (let i = 0; i < skaiciai.length; i++) {
    if (typeof(skaiciai[i]) == 'string') {
        skaiciai[i] = i;
    }
}

// 6 Skaičius kurie dalijasi iš 3 bet nesidalina iš 5 pakeisti į "A"


for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 == 0 && skaiciai[i] % 5 != 0) {
        skaiciai[i] = 'A';
    }
}

// 7 Suskaičiuoti skaičių sumą

let suma = 0;

for (let i = 0; i < skaiciai.length; i++) {
    if (typeof(skaiciai[i]) == 'number') {
        suma += skaiciai[i];
    }
}

console.log('suma', suma);

console.log(skaiciai);

let A = skaiciai.indexOf('A');
let B = skaiciai.indexOf('B');
A = skaiciai.lastIndexOf('A');

const rev = [...skaiciai].reverse();


console.log('A', A);
console.log('B', B);

console.log(rev);




