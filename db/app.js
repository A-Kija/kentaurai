const express = require('express');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const mysql = require('mysql');
const app = express();
const port = 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forest'
});

connection.connect();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (_, res) => {

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8');

    // SELECT column1, column2, ...
    // FROM table_name;

    const sql = `
        SELECT id, name, height, type
        FROM trees
        -- WHERE height > 5
        ORDER BY type, height DESC
    `;

    connection.query(sql, (err, rows) => {
        if (err) throw err;

        let listItems = '';
        rows.forEach(tree => {
            let liHtml = listItem;
            liHtml = liHtml
            .replace('{{ID}}', tree.id)
            .replace('{{NAME}}', tree.name)
            .replace('{{HEIGHT}}', tree.height)
            .replace('{{TYPE}}', tree.type);
            listItems += liHtml;
        });
        html = html.replace('{{LI}}', listItems)
        res.send(html);
    });
});





app.listen(port, _ => {
    console.log(`Trees manager are listening on port ${port}`);
});