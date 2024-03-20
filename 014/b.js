function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10; i++) {

    let random = rand(0, 7);
    
    console.log('metimas:', i, 'rezultatas:', random);
    
    if (random == 2){
        break;
    }
  
}

console.clear();

let count = 0;
let number = 0;

do {
    number = rand(0, 7);
    count++;
    console.log('metimas:', count, 'rezultatas:', number);

    // if (number == 7) {
    //     break;
    // }

} while (count != 10 && number != 2 && number != 7);

console.clear();


for (let i = 1; i <= 10; i++) {

    let random = rand(0, 7);
    
    console.log('metimas:', i, 'rezultatas:', random);
    
    if (random == 2){
        continue;
    }

    console.log('Imame');
  
}

console.clear();

for (let kintamojoPaskirtis = 1; kintamojoPaskirtis <= 3; kintamojoPaskirtis++) {

    console.log('BUM:', kintamojoPaskirtis);

}


hello: for (let i = 1; i <= 3; i++) {

    console.log('BIG:', i);

    for (let i = 1; i <= 3; i++) {
        console.log('small:', i);
        if (i == 2) {
            continue hello;
        }
    }

}