const express = require('express');
const bodyParser = require('body-parser');
// const fs = require('node:fs');
const mysql = require('mysql');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'color_store'
});

connection.connect();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (_, res) => {
    res.send('Colors Server');
});


app.listen(port, _ => {
    console.log(`Colors Server app listening on port ${port}`);
});