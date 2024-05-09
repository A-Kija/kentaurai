class Pinigine {
    
    constructor() {
        this.popieriniaiPinigai = [];
        this.metaliniaiPinigai = [];
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai.push(kiekis);
        } else {
            this.popieriniaiPinigai.push(kiekis);
        }
    }

    monetos() {
        const kiekis = this.metaliniaiPinigai.length;
        const visoSuma = this.metaliniaiPinigai.reduce((suma, m) => suma + m, 0);
        return `Menetų kiekis ${kiekis}, o suma ${visoSuma}`;
    }

    banknotai() {
        const kiekis = this.popieriniaiPinigai.length;
        const visoSuma = this.popieriniaiPinigai.reduce((suma, m) => suma + m, 0);
        return `banknotų kiekis ${kiekis}, o suma ${visoSuma}`;
    }

    skaiciuoti() {
        console.log(`Piniginėje yra ${this.monetos()} ir ${this.banknotai()}`);
        console.log(this);
    }

}

const p1 = new Pinigine();

p1.ideti(0.5);
p1.ideti(10);
p1.ideti(0.7);

p1.skaiciuoti();