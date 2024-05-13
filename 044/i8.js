class Stikline {

    constructor(turis) {
        this.kiekis = 0;
        this.turis = turis;
    }

    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, kiekis + this.kiekis);
        return this;
    }

    ispilti() {
        const visas = this.kiekis;
        this.kiekis = 0;
        return visas;
    }

    stiklinejeYra() {
        console.log(`${this.turis}ml turio stiklinėje yra ${this.kiekis}ml vandens`);
    }
}

s200 = new Stikline(200);
s150 = new Stikline(150);
s100 = new Stikline(100);

s200.ipilti(500).stiklinejeYra();


s100.ipilti(s150.ipilti(s200.ipilti(500).ispilti()).ispilti());

s200.stiklinejeYra();
s150.stiklinejeYra();
s100.stiklinejeYra();
