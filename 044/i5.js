class PirkiniuKrepselis {

    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        if (this.turinys.has('surelis')) {
            this.turinys.set('surelis', kiekis + this.turinys.get('surelis'));
        } else {
            this.turinys.set('surelis', kiekis);
        }
    }

    idetiPieno(kiekis) {
        if (this.turinys.has('pienas')) {
            this.turinys.set('pienas', kiekis + this.turinys.get('pienas'));
        } else {
            this.turinys.set('pienas', kiekis);
        }
    }

    idetiDuonos(kiekis) {
        if (this.turinys.has('duona')) {
            this.turinys.set('duona', kiekis + this.turinys.get('duona'));
        } else {
            this.turinys.set('duona', kiekis);
        }
    }

    krepselioTurinys() {
        console.log(this.turinys);
    }
}


const k = new PirkiniuKrepselis();

k.idetiDuonos(1);
k.idetiPieno(3);
k.idetiDuonos(1);
k.idetiDuonos(1);

k.krepselioTurinys();