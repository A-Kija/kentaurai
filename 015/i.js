function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let a = rand(1, 7);
let b = rand(1, 7);
let c = rand(1, 7);

console.log(a, b, c);

console.log('' + Math.min(a, b, c) + (a + b + c - Math.min(a, b, c) - Math.max(a, b, c)) + Math.max(a, b, c));


if (b >= a && b <= c) {
    console.log(a, b, c);
} else if (b <= a && b >= c) {
    console.log(c, b, a);
} else if (a >= c && a <= b) {
    console.log(c, a, b);
} else if (a <= c && a >= b) { 
    console.log(b, a, c);
} else if (c >= a && c <= b) {
    console.log(a, c, b);
} else if (c <= a && c >= b) {
    console.log(b, c, a);
} else {
    console.log('error');
}


if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    let temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}

console.log(a, b, c);



