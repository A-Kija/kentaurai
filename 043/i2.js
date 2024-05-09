class Pinigine {
    
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        console.log(`Piniginėje yra ${this.metaliniaiPinigai + this.popieriniaiPinigai} pinigų`);
        console.log(this);
    }

}

const p1 = new Pinigine();

p1.ideti(0.5);
p1.ideti(10);
p1.ideti(0.7);

p1.skaiciuoti();

