function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const o = { vardas: 'Jonas', amzius: '22', miestas: 'Vilnius' };

const a1 = ['Jonas', 22, 'Vilnius'];

console.log('o', o);
console.log('a1', a1);

const animals = ['Kiškis', 'Lapė', 'Barsukas', 'Vilkas', 'Laukinis katinas'];

// const peoples = [
//     {vardas: 'Jonas', amzius: 22, miestas: 'Vilnius'},
//     {vardas: 'Petras', amzius: 33, miestas: 'Kaunas'},
//     {vardas: 'Antanas', amzius: 44, miestas: 'Klaipėda'}
// ];



console.log(animals[1]);

// animals[5] = 'Lūšis';
animals.push('Lūšis');

animals[3] = 'Šuo';

// animals[10] = 'Zuikis';

console.log(animals.length);



console.log(animals);

// Atspausti visus animals masyvo elementus

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Atspausti porinių indeksų animals masyvo elementus

console.clear();

for (let i = 0; i < animals.length; i = i + 2) {
    console.log(animals[i]);
}

// Atspausti gyvūnus, kurių pavadinimas ilgesnis nei 6 raidės iš animals masyvo

console.clear();

for (let i = 0; i < animals.length; i++) {
    if (animals[i].length > 6) {
        console.log(animals[i]);
    }
    // animals[i].length > 6 && console.log(animals[i]);
}

// Sukurti masyvą su 5 atsitiktiniais skaičiais nuo 1 iki 10

// const numbers = [rand(1, 10), rand(1, 10), rand(1, 10), rand(1, 10), rand(1, 10)];

const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(rand(1, 10));
}

console.clear();
console.log(numbers);


// suskaičiuoti penketukus numbers masyve

let penketukai = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        penketukai++;
    }
}
console.log('Penketukai:', penketukai);


// Sukurti masyvą su 5 atsitiktiniais skaičiais nuo 1 iki 10, kuriame mažiausiai 3 skaičiai yra penketukai

console.clear();
let numbers2;
let count = 0

do {
    numbers2 = [];
    penketukai = 0;
    count++;
    for (let i = 0; i < 5; i++) {
        const sk = rand(1, 10);
        numbers2.push(sk);
        if (sk == 5) {
            penketukai++;
        }
    }
    console.log(numbers2);
} while (penketukai < 3);

console.log('Iteracijų:', count);

console.clear();

let rez;

rez = animals.push('Zuikis');

// console.log(rez, 'Zuikis push');

rez = animals.unshift('Briedis');

// console.log(rez, 'Briedis unshift');

rez =  animals.unshift('Keleivinis lektuvas', 'Kregždė', 'Bebras');

// console.log(rez, 'Keleivinis lektuvas, Kregždė, Bebras unshift');

animals.push('Lakštingala', 'Tigras', 'Pelekas');

console.log(animals);


rez = animals.pop();

console.log(rez, 'pop');

rez = animals.pop();

console.log(rez, 'pop');

rez = animals.shift();

console.log(rez, 'shift');

console.log(animals);


rez = animals.splice(2, 3); // 2 is index, 3 is how many elements to remove

console.log(rez, 'splice');

console.log(animals);



rez = animals.splice(4, 0, 'Dog', 'Cat', 'Mouse'); 

console.log(rez, 'splice');

console.log(animals);


let dogIndex = animals.indexOf('Dog');
animals.splice(dogIndex, 1); 

// console.log('Zuikis gone:', animals.filter(a => a != 'Zuikis'));



console.log(animals);

const r = ['A', 'B', 'C', 'D'][rand(0, 3)];

console.log(r);



