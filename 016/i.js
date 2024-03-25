function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const a = rand(1, 7);

for (let i = 0; i < a; i++) {
    console.log(a);
}