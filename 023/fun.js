function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

//1. Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).

bitGirls.unshift('Nausėda');

//2. Sukurkite naują masyvą bitCats Pagridu paimkite masyvą cats. Naujasis masyvas turėtų turėti elementus iš mažų, dviejų narių, masyviukų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.

const bitCats = [];

for (let i = 0; i < cats.length; i++) {
    bitCats.push([cats[i], ['storas', 'normalus'][rand(0, 1)]]);
}

console.log(bitCats);

//3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.

let storas = 0;
let normalus = 0;

for (let i = 0; i < bitCats.length; i++) {
    if (bitCats[i][1] == 'storas') {
        storas++;
    } else {
        normalus++;
    }
}

console.log(storas, normalus);

//5. (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir vietoj katinuko Nausėdai priskirkite stringą “Barsukas”.

const happyCats = [];

for (let i = 0; i < bitGirls.length; i++) {
    if (i == 0) {
        happyCats.push([bitGirls[i], 'Barsukas']);
    } else {
        happyCats.push([bitGirls[i], cats[i - 1]]);
    }
}

console.log(happyCats);

console.clear();

animals = ['cat', 'dog', 'elephant', 'bee', 'ant', 'whale', 'lion', 'tiger', 'bear', 'snake', 'shark', 'penguin', 'parrot', 'pigeon', 'eagle', 'sparrow', 'owl', 'seagull', 'woodpecker', 'flamingo', 'peacock', 'swan', 'duck', 'goose', 'pelican', 'stork', 'crane', 'heron', 'robin', 'nightingale', 'crow', 'raven', 'magpie', 'chickadee'];

// forEach
// ką daro: perrenka masyvo elementus
// ką grąžina: nieko

animals.forEach(animal => console.log(animal));


// map
// ką daro: perrenka masyvo elementus
// ką grąžina: naują masyvą su pakeistais elementais

console.clear();

const newAnimals = animals.map(animal => animal.toUpperCase());

console.log(newAnimals);

// console.clear();

// const sing = () => console.log('la la la');

// const person = {
//     name: 'Jonas',
//     age: 99,
// }

// person.hobbies = sing;


// person.hobbies();

// console.log(person.name);


// console.log(person);

// 1. Sukurkite masyvą smallAnimals, kuriame visis didesni nei 5 raidės gyvūnai būtų pakeisti į "big".

// const smallAnimals = animals.map(animal => animal.length > 5 ? 'big' : animal);

const smallAnimals = animals.map(animal => {
    if (animal.length > 5) {
        return 'big';
    }
    return animal;
});

// const smallAnimals = animals.map(animal => animal.length > 5);


console.log(smallAnimals);

// 2. Sukurti masyvą bigAnimals, kuriame visi gyvūnai su 3 raidėm yra prailginti 5 "*".

const bigAnimals = animals.map(animal => {
    if (animal.length == 3) {
        return animal + '*****';
    }
    return animal;
});

console.clear();

console.log(bigAnimals);

// filter
// ką daro: perrenka masyvo elementus
// ką grąžina: naują masyvą su tik tam tikrais elementais


const filteredAnimals = animals.filter(animal => true);

console.clear();

console.log(filteredAnimals);

// 3. Sukurkite masyvą animalsStartingWithS, kuriame būtų tik gyvūnai prasidedantys raide "s".

const animalsStartingWithS = animals.filter(animal => animal[0] == 's');

console.log(animalsStartingWithS);

// 4. Sukurkite masyvą animalsWithoutTigers, kuriame nebutų gyvūno "tiger".

console.clear();

const animalsWithoutTigers = animals.filter(animal => animal != 'tiger');

console.log(animalsWithoutTigers);

const withNumbers = animals.map((animal, i) => `${i + 1}. ${animal}`);


console.clear();

const animalsWithOddIndex = withNumbers.filter((_, i) => i % 2 == 1);

console.log(withNumbers);
console.log(animalsWithOddIndex);


// sort
// ką daro: surikiuoja masyvo elementus
// ką grąžina: tą patį surikiuotą masyvą

// animals.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }
//     return 0;
// });

animals.sort((a, b) => b.localeCompare(a));

console.clear();

console.log(animals);

const digits = [1, 5, 7, 3, 9, 2, 4, 6, 8];

digits.sort((a, b) => b - a);

console.log(digits);

// 5. Išrūšiuokite masyvą animals pagal gyvulio ilgį - ilgiausi pradžioje.

animals.sort((a, b) => b.length - a.length);

console.clear();

console.log(animals);

// 6. Išrūšiuokite masyvą animals pagal abėcėlę, naudodami antrą žodžio raidę.

animals.sort((a, b) => a[1].localeCompare(b[1]));

console.clear();

console.log(animals);
