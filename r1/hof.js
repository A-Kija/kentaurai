console.log('Labas, Hofai!');


function fun1(f) {
    return f;
}

function fun2(what) {
    return what;
}


const fun4 = f1 => d1 => f1(d1);


console.log(    fun1(fun2)('labas')    );
console.log(     fun4(fun1)('Labux')     );



function fun3(f1) {
    return f1('labas');
}

console.log(   fun3(fun1)       );


