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




app.listen(port, _ => {
    console.log(`Colors app listening on port ${port}`);
});