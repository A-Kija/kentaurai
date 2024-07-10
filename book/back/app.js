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


app.use(cors());

app.use(cookieParser());
// app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/register', (req, res) => {

    const { email } = req.body;

    if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(422).json({
            message: 'Siunčiamoje formoje yra klaidų',
            errors: {
                email: 'El pašto formatas neteisingas'
            }
        }).end();
    }




    res.status(422).json({
        message: 'Viskas blogai'
    })

});




app.listen(port, _ => {
    console.log(`Books app listening on port ${port}`);
});
