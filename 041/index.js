const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());
const fs = require('node:fs');


app.post('/add-animal', (req, res) => {

    const animal = req.body.animal;
    const id = uuidv4();

    let data = fs.readFileSync('./data/animals.json', 'utf8');

    data = JSON.parse(data);

    data.push({id, animal});

    data = JSON.stringify(data);

    fs.writeFileSync('./data/animals.json', data);

    res.json({
        message: 'OK'
    });

});

app.get('/get-animals', (req, res) => {

    let data = fs.readFileSync('./data/animals.json', 'utf8');

    data = JSON.parse(data);

    res.json({
        message: 'OK',
        animals: data
    });

});

app.get('/show-animal/:uuid', (req, res) => {

    let html = fs.readFileSync('./data/animal.html', 'utf8');


    res.send(html);

});





app.listen(port, _ => {
    console.log(`041 app listening on port ${port}`);
});