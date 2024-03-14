console.log('Labas dienas!');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('-------------- 3 --------------');

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);

let arGaunasi = a + b > c && a + c > b && b + c > a;

console.log(arGaunasi ? 'Gaunasi' : 'Negaunasi');

let arGaunasi2 = (a + b + c) / Math.max(a, b, c) > 2;

console.log(arGaunasi2 ? 'Gaunasi' : 'Negaunasi');

console.log('-------------- 4 --------------');

let A = rand(0, 2);
let B = rand(0, 2);
let C = rand(0, 2);
let D = rand(0, 2);

console.log(A, B, C, D);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;
if (A == 2) {
    dvejetai++;
}
if (B == 2) {
    dvejetai++;
}
if (C == 2) {
    dvejetai++;
}
if (D == 2) {
    dvejetai++;
}

let suma = A + B + C + D;

vienetai = suma - dvejetai * 2;

nuliai = 4 - vienetai - dvejetai;

console.log('Nulių:', nuliai);
console.log('Vienetų:', vienetai);
console.log('Dvejetų:', dvejetai);


console.log('-------------- if vs ternary --------------');


let petrasAge = 97;

let gauna = petrasAge >= 99 ? 'gauna' : 'neduoda';

let gauna2;
if (petrasAge >= 99) {
    gauna2 = 'gauna';
} else {
    gauna2 = 'neduoda';
}


console.log(gauna);
console.log(gauna2);





