const express = require('express');
const app = express();
const port = 80;
app.use(express.static('public'));


// Router



app.get('/bebras', (req, res) => {
    const content = '<h1>Labas Bebrai</h1>';
    res.send(content);
});

app.get('/bebras/jonas', (req, res) => {
    const content = '<h1>Labas Bebrai vardu Jonas</h1>';
    res.send(content);
});

app.get('/zveris/:animal', (req, res) => {
    const animal = req.params.animal;
    const content = '<h1>Labas, ' + animal + '</h1>';
    res.send(content);
});

// Padaryti sumatorių, kuris rodytų sumą bet kokių skaičių užrašytų pvz taip: localhost/sum/58/32


app.get('/sum/:a1/:a2', (req, res) => {
    const a = parseInt(req.params.a1);
    const b = parseInt(req.params.a2);
    const rez = a + b;
    const content = '<h1>SUMA: ' + rez + '</h1>';
    res.send(content);
});

// Padaryti sumatorių, kuris rodytų sumą bet kokių skaičių užrašytų pvz taip: localhost/sum/58/plus/32

app.get('/sum/:a1/plus/:a2', (req, res) => {
    const a = parseInt(req.params.a1);
    const b = parseInt(req.params.a2);
    const rez = a + b;
    const content = '<h1>SUMA: ' + rez + '</h1>';
    res.send(content);
});

// Padaryti sumatorių, kuris rodytų rezultatą bet kokių skaičių užrašytų pvz taip: localhost/calc/58/plus/32 rodytų sumą, localhost/calc/58/minus/32 rodytų skirtumą

app.get('/calc/:a1/:what/:a2', (req, res) => {
    const a = parseInt(req.params.a1);
    const b = parseInt(req.params.a2);
    let rez = '';
    if (req.params.what == 'plus') {
        rez = a + b;
    } else if (req.params.what == 'minus') {
        rez = a - b;
    }
    const content = '<h1>SUMA: ' + rez + '</h1>';
    res.send(content);
});

// http://localhost/narve?sedi=karve&guli=zuikis

app.get('/narve', (req, res) => {

    const kas = req.query.sedi;
    const kas2 = req.query.guli

    const content = '<h1>SĖDI: ' + kas + '</h1><h1>GULI: ' + kas2 + '</h1>';
    res.send(content);

});

// Padaryti sumatorių, kuris rodytų sumą bet kokių viejų skaičių kurie yra perduodami per query iš url: localhost/sumatorius


// localhost/sumatorius?a=5&b=8

app.get('/sumatorius', (req, res) => {

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const rez = a + b;
    const content = '<h1>SUMA: ' + rez + '</h1>';
    res.send(content);

});


app.listen(port, () => {
    console.log(`Zoologijos sodas veikia ant ${port} porto`);
});