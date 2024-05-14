const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const fs = require('node:fs');


app.get('/', (req, res) => {

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const nav = fs.readFileSync('./data/nav.html', 'utf8');

    html = html.replace('{{NAV}}', nav);

    res.send(html);

});


app.get('/create', (req, res) => {

    let html = fs.readFileSync('./data/create.html', 'utf8');
    const nav = fs.readFileSync('./data/nav.html', 'utf8');

    html = html.replace('{{NAV}}', nav);

    res.send(html);

});


app.post('/store', (req, res) => {

    const color = req.body.color;
    const shape = parseInt(req.body.shape);
    const id = uuidv4();

    let data = fs.readFileSync('./data/colors.json', 'utf8');

    data = JSON.parse(data);

    data.push({ id, color, shape });

    data = JSON.stringify(data);

    fs.writeFileSync('./data/colors.json', data);

    res.redirect(302, 'http://colors.test');

});




app.listen(port, _ => {
    console.log(`Colors app listening on port ${port}`);
});