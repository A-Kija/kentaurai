class Troleibusas {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }
    
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius) {
        const islipo = this.keleiviuSkaicius < keleiviuSkaicius ? this.keleiviuSkaicius : keleiviuSkaicius;
        this.keleiviuSkaicius -= islipo;
        this.constructor.bendrasKeleiviuSkaicius(-1 * islipo);
    }

    keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(`Visuose troleibusuose važiuoja ${this.constructor.visiKeleiviai} keleivių`)
    }

    vaziuoja() {
        console.log(`Troleibus važiuoja ${this.keleiviuSkaicius} keleivių`);
    }

}

const t1 = new Troleibusas();
const t3 = new Troleibusas();
const t2 = new Troleibusas();

t1.ilipa(10);
t2.ilipa(5);
t3.ilipa(20);

t1.islipa(5);
t2.islipa(20);
t3.islipa(15);

t3.vaziuoja();
t3.keleiviuSkaiciusVisuoseTroleibusuose();