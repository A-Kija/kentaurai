function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const m1 = [
    [1, 2, 3],
    [4, 5, 6]
];


const m2 = m1;

console.log('m1 === m2', m1 === m2);

m2[0][0] = 1000;

const m3 = [...m1]; // shallow copy

console.log('m1 === m3', m1 === m3);

m3[0][1] = 2000;


m4 = structuredClone(m1); // deep copy

console.log('m1 === m4', m1 === m4);

m4[0][2] = 3000;

console.table(m1);

console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą ir kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. Paskutinis skaičius turėtų būti 1. Visas rezultatas turėtų būti toks:  10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.clear();

// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, rand() funkcija generuokite atsitiktinį automobilio greitį o visiems ciklams pasibaigus pateikite bendrą visų 10 ratų vidutinį greitį.

let totalSpeed = 0;

for (let i = 0; i < 10; i++) {
    const speed = rand(120, 220);
    console.log(speed);
    totalSpeed += speed;
}

const averageSpeed = totalSpeed / 10;

console.log('Average speed:', averageSpeed);

console.clear();

// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Jo kuro bake liko 44 litrai kuro. Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: nuo 3 iki 6 litrų. Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, o ciklams pasibaigus pateikite išvadą ar automobiliui užteko kuro įveikti visus 10 ratų. Kurui pasibaigus ciklą nutraukite anksčiau laiko. 

let fuel = 44;

for (let i = 0; i < 10; i++) {
    const usage = rand(3, 6);
    fuel -= usage;
    if (fuel <= 0) {
        break;
    }
    console.log( i + 1, usage);
}

if (fuel > 0) {
    console.log('Fuel left:', fuel);
} else {
    console.log('Out of fuel', fuel);
}

console.clear();

// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų). Kiekviename žiede yra 5 posūkiai, kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h. Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 posūkiai) ir ciklams pasibaigus atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.

let minSpeed = 121;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        const speed = rand(20, 120);
        console.log(speed);
        if (speed < minSpeed) {
            minSpeed = speed;
        }
    }
}

console.log('Min speed:', minSpeed);

console.clear();

// (BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja. Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai: netikėtai iššokti - neiišokti ant kelio kengūra, vairuotojas gali nespėti - spėti pasukti vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius. Imituokite tokią situaciją do while ciklu- vienas kilometras vienas ciklo prasisukimas. Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę. Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra, vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite. Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.

let km = 0;
let kangaroo;
let steering;
let brakes;

do {
    kangaroo = !!rand(0, 1);
    steering = !!rand(0, 1);
    brakes = !!rand(0, 1);
    console.log(km, kangaroo, steering, brakes);
    km++;
} while (!kangaroo || steering || brakes);

console.clear();


// 1. Sukurti objektą, kuriame būtų:
// - vardas
// - pavardė
// - amžius
// reikšmės užpildyti savo duomenimis (galite meluoti jeigu nenorite teikti tikrų duomenų)

const person = {
    name: 'Briedis',
    surname: 'Miškinius',
    age: 33
};

//2. Pasendinkite sukurtą objektą 5 metais ir atspausdinkite objektą

person.age = person.age + 5;

console.log(person);

const person1 = {
    name: 'Briedis',
    surname: 'Miškinius',
    age: 15
};

const person2 = {
    name: 'Vilkas',
    surname: 'Miškinius',
    age: 53
};

const person3 = {
    name: 'Lapė',
    surname: 'Miškinius',
    age: 34
};

const people = [person1, person2, person3];

// 3. Visus pasendinkite 5 metais ir atspausdinkite

for (let i = 0; i < people.length; i++) {
    people[i].age = people[i].age + 5;
}



// 4. Suskaičiuokite visų žmonių amžių vidurkį ir atspausdinkite

let totalAge = 0;

for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}

const averageAge = totalAge / people.length;

console.log('Average age:', averageAge);

// 5. Atsitiktiniu būdu atspausdinkite A arba B raidę

// const raides = ['A', 'B'];
// console.log(raides[rand(0, 1)]);


// 6. Sugeneruokite atsitiktinį skaičių nuo 0 iki 4. Jeigu jis didesnis nei 2 atspauzdinkite 'DIDESNIS', kitu atveju 'MAZESNIS'


// const randomNumber = rand(0, 4);

// if (randomNumber > 2) {
//     console.log('DIDESNIS');
// } else {
//     console.log('MAZESNIS');
// }

// 7. Parašykite vyriausiojo žmogaus vardą

let oldestPerson = people[0];

for (let i = 0; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
        oldestPerson = people[i];
    }
}

console.log('Oldest person:', oldestPerson.name);


// 8. Sukurkite naują žmogų ir įdėkite jį į žmonių masyvo pradžią

const person4 = {
    name: 'Katinas',
    surname: 'Miškinius',
    age: 23
};

people.unshift(person4);

console.table(people);

const colors = ['crimson', 'gold', 'pink', 'purple', 'skyblue', 'orange'];


// 9. Sukurti masyvą eggs su 10 elementų, kurie yra atsitiktinės spalvos iš masyvo colors

console.clear();

const eggs = [];

for (let i = 0; i < 10; i++) {
    eggs.push(colors[rand(0, colors.length - 1)]);
}

// console.log(eggs);

// console.log('%cEggs', 'font-size: 20px; color: red;');

console.log(Array(10));

// const s = 'width: 136px;height: 190px;background: #ffc000;display: block;border-radius: 50% 60% 50% 50% / 70% 70% 40% 40%;';


for (let i = 0; i < eggs.length; i++) {
    console.log('%c    ', 'font-size: 30px;background: '+ eggs[i] +';display: block;border-radius: 50% 60% 50% 50% / 70% 70% 40% 40%;');
}

// saskaitos[i].vat = (sumProductsTotal * 0.21).toFixed(2); 
 
// saskaitos[i].grandTotal = (sumProductsTotal + saskaitos[i].vat).toFixed(2);

