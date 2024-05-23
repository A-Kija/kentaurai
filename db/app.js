const express = require('express');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const mysql = require('mysql');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8');

    res.send(html);
});


app.listen(port, _ => {
    console.log(`Trees manager are listening on port ${port}`);
});