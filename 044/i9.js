class Grybas {

    constructor() {
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
    }

    rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

}

class Krepsys {

    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas) {
        console.log(grybas);
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.prikrauta < this.dydis;
    }

}

const k = new Krepsys();


while(k.deti(new Grybas())){}

console.log(k);