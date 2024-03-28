function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('Hello from 018/u.js');

const m = [5, 15, 25];

const r = m.push(6);

console.log([...m]);


//1. do: prideda nauja elementą į masyvo galą
//2. return: masyvo ilgį


const r2 = m.splice(2, 2);

//1. do: ištrina vieną elementą iš masyvo pagal nurodytą index
//2. return: ištrintus elementus sudeda į naują masyvą ir grąžina jį


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log([...animals]);

const r3 = animals.slice(2, 3);

//1. do: nieko nekeičia
//2. return: naują masyvą, kuris yra išpjautas iš seno masyvo pagal nurodytą index ir ilgį


console.log(r3, animals);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array2.concat(array1);

//1. do: nieko nekeičia
//2. return: naują masyvą, kuris yra sudarytas iš dviejų masyvų

console.log(array1, array2, array3);


const array4 = [1, 2, 3, 4];

const r4 = array4.fill('A', 1, 3);

// r4[1] = 'B';

console.log(r4, array4);

const m10 = Array(100).fill('A');

console.log(m10);

//1. do: pakeičia visus masyvo elementus į nurodytą reikšmę
//2. return: tą patį masyvą


const elements = ['Fire', 'Air', 'Water'];

const r5 = elements.join('***');

console.log(r5, elements);

//1. do: nieko nekeičia
//2. return: string, kuris yra sudarytas iš masyvo elementų, atskirtų nurodytu simboliu


const r6 = r5.split('***');

console.log(r5, r6);

const fairtTail = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.';

const r7 = fairtTail.split(' ');

console.log(r7, fairtTail);

console.clear();

const md1 = [
    [1, 2, 3],
    [4, 5, ['a', 'b'], 10],
    [7, 9],
    [11, 12]
];


console.table(md1);

console.log(md1[1][2][0]);

for (let i = 0; i < md1.length; i++) {
    for (let j = 0; j < md1[i].length; j++) {
        if (Array.isArray(md1[i][j])) {
            for (let k = 0; k < md1[i][j].length; k++) {
                console.log(md1[i][j][k]);
            }
        } else {
            console.log(md1[i][j]);
        }
    }
}

const animals2 = [
    ['ant', 'bison', 'camel'],
    ['duck', 'elephant', 'giraffe'],
    ['hippo', 'iguana']
];

// 1. išspausdinti visus gyvūnus

console.clear();

for (let i = 0; i < animals2.length; i++) {
    for (let j = 0; j < animals2[i].length; j++) {
        console.log(animals2[i][j]);
    }
}

// 2. duck pakeisti į dog



for (let i = 0; i < animals2.length; i++) {
    for (let j = 0; j < animals2[i].length; j++) {
        if (animals2[i][j] == 'duck') {
            animals2[i][j] = 'dog';
        }
    }
}

console.clear();

console.table(animals2);

const newMD = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(i * 4 + j + 1);
    }
    newMD.push(row);
}

console.clear();

console.table(newMD);

// 3. Padaryti naują masyvą 5x4 kurio reikšmės yra atsitiktiniai dviženkliai skaičiai   


console.clear();

const newMD2 = [];

for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(rand(10, 99));
    }
    newMD2.push(row);
}

console.log(newMD2);

//4. Surasti ir išspausdinti mažiausią skaičių

// let min = newMD2[0][0];

// for (let i = 0; i < newMD2.length; i++) {
//     for (let j = 0; j < newMD2[i].length; j++) {
//         if (newMD2[i][j] < min) {
//             min = newMD2[i][j];
//         }
//     }
// }

// console.clear();

// console.log(newMD2);
// console.log(min);

const r10 = newMD2.flat();

console.log(r10);


const min = Math.min(...newMD2.flat());

console.log(min);

console.clear();

const arr2 = [0, 1, [2, [3, [4, [5]]]]];

console.log(arr2.flat(Infinity));

