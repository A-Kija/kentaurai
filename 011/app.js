console.log('Welcome to the CYCLE world! 🚴‍♂️🚴‍♂️🚴‍♂️');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);



for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.clear();


let word = 'Hello Mr. Racoon!';

for (let i = 0; i < word.length; i+=2) {
  console.log(word[i] + (word[i+1] !== undefined ? word[i+1] : ''));
}

// reverse

console.clear();

for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}

console.clear();

console.log('%c RACOON ', 'color: skyblue; background-color: crimson; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold; text-align: center; text-shadow: 2px 2px 2px black;');

// odd letters in red, even letters in blue

for (let i = 0; i < word.length; i++) {
  if (i % 2 === 0) {
    console.log('%c' + word[i], 'color: skyblue');
  } else {
    console.log('%c' + word[i], 'color: crimson');
  }
}

console.clear();

// console.log(m);

let m;

do {

    m = rand(0, 1) ? 'H' : 'S';
    console.log(m);

} while (m != 'S');

/*
== --- !=
=== --- !==
> --- <= 
< --- >=
|| --- &&
*/


let r;

r = rand(20, 300);

console.log(r, 'gimtadienis!!!!');

while (r < 200) {
    r =  r + rand(20, 50);
    console.log(r);
}