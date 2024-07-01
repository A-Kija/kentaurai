const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const fs = require('node:fs');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.use(cors());

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

app.get('/colors', (req, res) => {
    
    const sql = `
        SELECT *
        FROM colors
    `;
    

    connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});




app.post('/colors', (req, res) => {

    let { color, range, shape } = req.body;

    // sanitization
    range = Math.min(parseInt(range), 10);
    isNaN(range) && (range = 1);
    !['square', 'circle', 'rounded', 'triangle'].includes(shape) && (shape = 'square');
    !/^#[0-9A-F]{6}$/i.test(color) && (color = '#cccccc')

    const sql = `
    INSERT INTO colors (color, amount, shape)
    VALUES ( ?, ?, ? )
`;
    connection.query(sql, [color, range, shape], err => {
        if (err) throw err;
        res.send('OK');
    });
});


app.listen(port, _ => {
    console.log(`Colors Server app listening on port ${port}`);
});