class Tevas {

    constructor() {
        this.pinigai = 5000;
        this.religija = '+++';
    }

    svilpti() {
        console.log('Svvvvvvv!');
    }

    scrolinti() {
        console.log('FB');
    }

}


class Vaikas extends Tevas {

    constructor() {
        super();
        this.islaidos = 1000;
        this.religija = '---';
    }

    scrolinti() {
        console.log('TT');
    }

}



const vaikas = new Vaikas;

vaikas.svilpti();

vaikas.scrolinti();

console.log(vaikas);


