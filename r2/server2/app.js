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
        ORDER BY id DESC
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
    connection.query(sql, [color, range, shape], (err, result) => {
        if (err) throw err;
        setTimeout(_ => {
            res.json({
                success: true,
                id: result.insertId,
                msg: { title: 'Colors', type: 'success', text: 'Color was added successfully' }
            });
        }, 2000);
    });
});

app.delete('/colors/:id', (req, res) => {

    const id = req.params.id;

    const sql = `
    DELETE FROM colors
    WHERE id = ?
`;
    connection.query(sql, [id], err => {
        if (err) throw err;
        setTimeout(_ => {
            res.json({
                success: true,
                msg: { title: 'Colors', type: 'success', text: 'Color was deleted successfully' }
            });
        }, 2000);
    });

});

app.put('/colors/:id', (req, res) => {

    let { color, range, shape } = req.body;
    const id = req.params.id;

    // sanitization
    range = Math.min(parseInt(range), 10);
    isNaN(range) && (range = 1);
    !['square', 'circle', 'rounded', 'triangle'].includes(shape) && (shape = 'square');
    !/^#[0-9A-F]{6}$/i.test(color) && (color = '#cccccc')

    const sql = `
    UPDATE colors
    SET color = ?, amount = ?, shape = ?
    WHERE id = ?
`;
    connection.query(sql, [color, range, shape, id], err => {
        if (err) throw err;
        setTimeout(_ => {
            res.json({
                success: true,
                msg: { title: 'Colors', type: 'success', text: 'Color was edited successfully' }
            });
        }, 2000);
    });
});



app.listen(port, _ => {
    console.log(`Colors Server app listening on port ${port}`);
});