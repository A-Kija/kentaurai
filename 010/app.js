console.log('Hello, how are you?');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let one = rand(0, 4);
let two = rand(0, 4);

console.log(one, two);

let result;

if (one > two) {
    // let result;
    result = one / two;
} else {
    result = two / one;
} 



console.log(result);




if (5 > 13) {
console.log('5 is greater than 3');
console.log('5 is greater than 3');
}

console.clear();

console.log(one, two);

if (one == 0 || two == 0) {
    result = 'Cannot divide by zero';

} 

// if (one == 0) {
//     console.log('one is zero');
// }

else if (one > two) {
    result = one / two;
} 

else {
    result = two / one;
} 


console.log(result);


console.clear();

console.log(Math.PI);

console.log(Math.round(45.49));

console.log(Math.floor(45.9));

console.log(Math.ceil(45.1));

console.log(Math.min(45, 3, 5, 7, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log(Math.max(45, 3, 5, 7, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log(Math.abs(-45));

console.log(Math.random());

console.clear();

let str = 'Barsukas';

console.log(str.length);

console.log(str[0] + str[1]);


let fairytail = 'Once upon a time, in a faraway forest...';

console.log(fairytail.includes('upon'));

console.log(fairytail.indexOf('Once'));

let shortString = 'abckkk';

console.log(shortString.padEnd(1005, '*'));


console.clear();

let shortFairytail = fairytail.slice(5, 10);

console.log(shortFairytail);

let lowerCaseFairytail = fairytail.toLowerCase();

console.log(lowerCaseFairytail);

let upperCaseFairytail = fairytail.toUpperCase();

console.log(upperCaseFairytail);

console.log('ABC'.charCodeAt(2));

console.log('aaa' > 'aa');

console.clear();

let v;

if (5 > 8) {
    v = 'Jo';
} else {
    v = 'Ne';
}

console.log(v);


let vv = (5 > 8) ? 'Jo' : 'Ne';

console.log(vv);


let A = -88;
let aRez;

if (A > 0) {
    aRez = 'Teigiamas';
} else if (A < 0) {
    aRez = 'Neigiamas';
} else {
    aRez = 'Nulis';
}

console.log(aRez);

let aRez2 = A > 0 ? 'Teigiamas' : A < 0 ? 'Neigiamas' : 'Nulis';

console.log(aRez2);


15 > 8 ? console.log('taip') : console.log('ne');


let z1 = 5;
let z2 = 8;

let zasys = z1 + ' Žąsys su ' + z2 + ' žąsiais';

console.log(zasys);

let zasys2 = `${z1} Žąsys su ${z2} žąsiais`;

console.log(zasys2);

let longKultilineStory = 'Labas rytas, \n' + 
    'kaip sekasi? \n' + 
    'Gerai?';

console.log(longKultilineStory);

let longKultilineStory2 = `Labas rytas,
kaip sekasi?
Gerai?`;

console.log(longKultilineStory2);



