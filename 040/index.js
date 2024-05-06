const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());
const fs = require('node:fs');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


app.post('/write', (req, res) => {

    const digit = req.body.digit;

    let data = fs.readFileSync('./data/digits.json', 'utf8');

    data = JSON.parse(data);

    data.push(digit);

    data = JSON.stringify(data);

    fs.writeFileSync('./data/digits.json', data);

    res.json({
        message: 'OK'
    });

});

app.get('/read', (req, res) => {

    let data = fs.readFileSync('./data/digits.json', 'utf8');

    data = JSON.parse(data);

    res.json({
        message: 'OK',
        digits: data
    });

});


app.get('/random2', (req, res) => {

    let html = fs.readFileSync('./data/random.html', 'utf8');
    const d = rand(0, 9);

    html = html.replace('{{digit}}', d);


    res.send(html);


});


app.listen(port, _ => {
    console.log(`040 app listening on port ${port}`);
});