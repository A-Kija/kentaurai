const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
// const { v4: uuidv4 } = require('uuid');
// const fs = require('node:fs');
const md5 = require('md5');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'book'
});

connection.connect();


app.use(cors());

app.use(cookieParser());
// app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/admin/users', (_, res) => {

    const sql = `
        SELECT *
        FROM users`;

    connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.json({
            users: rows
        }).end();
    });
});






app.post('/register', (req, res) => {

    const { name, email, password } = req.body;

    if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(422).json({
            message: 'Siunčiamoje formoje yra klaidų',
            errorsBag: {
                email: 'El pašto formatas neteisingas',
            }
        }).end();
        return;
    }

    const sql = `SELECT email FROM users WHERE email = ? `;

    connection.query(sql, [email], (err, rows) => {
        if (err) throw err;
        if (rows.length) {
            res.status(422).json({
                message: 'Siunčiamoje formoje yra klaidų',
                errorsBag: {
                    email: 'Toks el paštas jau yra',
                }
            }).end();
        } else {
            const sql = `
            INSERT INTO users (name, email, password)
            VALUES ( ?, ?, ? )
            `;
            connection.query(sql, [name, email, md5(password)], (err) => {
                if (err) throw err;
                res.status(201).json({
                    message: {
                        type: 'success',
                        title: 'Sveiki!',
                        text: `Malonu, kad prie mūsų prisijungėte, ${name}`
                    }
                }).end();
            });
        }
    });
});




app.listen(port, _ => {
    console.log(`Books app listening on port ${port}`);
});
