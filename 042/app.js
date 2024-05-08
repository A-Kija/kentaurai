

const obj = {
    animal: 'Fox',
    tail: '30'
}



class Fox {

    #age = '';

    constructor(tail, c) {
        this.tail = tail;
        this.color = c;
        this.add10();
    }

    get age() {
        return this.#age; 
    }

    set age(a) {
        if (a > 20) {
            a = 20;
        }
        this.#age = a + ' years'; 
    }

    add10() {
        this.tail += 10;
    }

}

const obj2 = new Fox(30, 'Brown');
const obj3 = new Fox(20, 'Black');

obj3.color = 'Blue';

obj3.add10();

obj2.add10();
obj2.add10();

obj2.age = 66;

console.log(obj, obj2, obj3);

// console.log(obj3.color);

console.log(obj2.age);