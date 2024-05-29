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



app.get('/book', (_, res) => {

    let html = fs.readFileSync('./data/book.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem2.html', 'utf8');
    const phoneItem = fs.readFileSync('./data/phoneItem.html', 'utf8');

    // SELECT ProductID, ProductName, CategoryName
    // FROM Products
    // INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;


    const sql = `
        SELECT c.id, p.id AS pid, c.name, p.number
        FROM clients AS c
        INNER JOIN phones AS p
        ON c.id = p.client_id
        ORDER BY c.name

    `;

    connection.query(sql, (err, rows) => {
        if (err) throw err;

        const clients = [];

        rows.forEach(client => {
            const clientFromList = clients.find(c => c.id === client.id);
            if (!clientFromList) {
                clients.push({...client, number: [client.number], pid: [client.pid]});
            } else {
                clientFromList.number.push(client.number);
                clientFromList.pid.push(client.pid);
            }
        });

        let listItems = '';
        clients.forEach(client => {
            let liHtml = listItem;
            let listItems2 = '';
            client.pid.forEach((p, i) => {
                let pItem = phoneItem;
                pItem = pItem
                .replace('{{PID}}', p)
                .replace('{{PHONE}}', client.number[i]);
                listItems2 += pItem;
            });

            liHtml = liHtml
                .replace('{{ID}}', client.id)
                .replace('{{NAME}}', client.name)
                .replace('{{PHONES}}', listItems2)
            listItems += liHtml;
        });
        html = html.replace('{{LI}}', listItems)
        res.send(html);
    });
});


app.get('/book-left', (_, res) => {

    let html = fs.readFileSync('./data/book.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem2.html', 'utf8');
    const phoneItem = fs.readFileSync('./data/phoneItem.html', 'utf8');


    const sql = `
        SELECT c.id, p.id AS pid, c.name, p.number
        FROM clients AS c
        LEFT JOIN phones AS p
        ON c.id = p.client_id
        ORDER BY c.name

    `;

    connection.query(sql, (err, rows) => {
        if (err) throw err;

        const clients = [];

        rows.forEach(client => {
            const clientFromList = clients.find(c => c.id === client.id);
            if (!clientFromList) {
                clients.push({...client, number: [client.number], pid: [client.pid]});
            } else {
                clientFromList.number.push(client.number);
                clientFromList.pid.push(client.pid);
            }
        });

        let listItems = '';
        clients.forEach(client => {
            let liHtml = listItem;
            let listItems2 = '';
            client.pid.forEach((p, i) => {
                let pItem = phoneItem;
                pItem = pItem
                .replace('{{PID}}', p)
                .replace('{{PHONE}}', client.number[i]);
                listItems2 += pItem;
            });

            liHtml = liHtml
                .replace('{{ID}}', client.id)
                .replace('{{NAME}}', client.name)
                .replace('{{PHONES}}', listItems2)
            listItems += liHtml;
        });
        html = html.replace('{{LI}}', listItems)
        res.send(html);
    });
});

app.get('/book-right', (_, res) => {

    let html = fs.readFileSync('./data/book.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem2.html', 'utf8');
    const phoneItem = fs.readFileSync('./data/phoneItem.html', 'utf8');


    const sql = `
        SELECT c.id, p.id AS pid, c.name, p.number
        FROM clients AS c
        RIGHT JOIN phones AS p
        ON c.id = p.client_id
        ORDER BY c.name

    `;

    connection.query(sql, (err, rows) => {
        if (err) throw err;

        const clients = [];

        rows.forEach(client => {
            const clientFromList = clients.find(c => c.id === client.id);
            if (!clientFromList) {
                clients.push({...client, number: [client.number], pid: [client.pid]});
            } else {
                clientFromList.number.push(client.number);
                clientFromList.pid.push(client.pid);
            }
        });

        let listItems = '';
        clients.forEach(client => {
            let liHtml = listItem;
            let listItems2 = '';
            client.pid.forEach((p, i) => {
                let pItem = phoneItem;
                pItem = pItem
                .replace('{{PID}}', p)
                .replace('{{PHONE}}', client.number[i]);
                listItems2 += pItem;
            });

            liHtml = liHtml
                .replace('{{ID}}', client.id)
                .replace('{{NAME}}', client.name)
                .replace('{{PHONES}}', listItems2)
            listItems += liHtml;
        });
        html = html.replace('{{LI}}', listItems)
        res.send(html);
    });
});



app.get('/stat', (_, res) => {

    let html = fs.readFileSync('./data/stats.html', 'utf8');

    // SELECT MIN(Price)
    // FROM Products;

    
    const sql = `
        SELECT MIN(height) AS min, MAX(height) AS max, COUNT(*) AS count, SUM(height) AS sum, AVG(height) AS avg
        FROM trees
    `;

    connection.query(sql, (err, rows) => {
        if (err) throw err;

        html = html
        .replace('{{MAX}}', rows[0].max)
        .replace('{{MIN}}', rows[0].min)
        .replace('{{SUM}}', rows[0].sum)
        .replace('{{COUNT}}', rows[0].count)
        .replace('{{AVG}}', rows[0].avg);

        res.send(html);
    });


    

});


app.get('/find', (req, res) => {

    let html = fs.readFileSync('./data/find.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8');

    // SELECT column1, column2, ...
    // FROM table_name;

    const s = req.query.s;

    const sql = `
        SELECT id, name, height, type
        FROM trees
        WHERE name LIKE ?
    `;

    connection.query(sql, ['%' + s + '%'], (err, rows) => {
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
        html = html.replace('{{LI}}', listItems).replace('{{S}}', s);
        res.send(html);
    });
});



app.get('/', (_, res) => {

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8');

    // SELECT column1, column2, ...
    // FROM table_name;

    const sql = `
        SELECT id, name, height, type
        FROM trees
        -- WHERE height > 5
        -- ORDER BY type, height DESC
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


app.post('/plant', (req, res) => {

    let { name, height, type } = req.body;

    // sanitization
    height = parseFloat(height);
    isNaN(height) && (height = 0);
    !['lapuotis', 'spygliuotis', 'palmė'].includes(type) && (type = 'lapuotis');
    !name && (name = '---');

    //  INSERT INTO table_name (column1, column2, column3, ...)
    //  VALUES (value1, value2, value3, ...);

    // const sql = `
    //     INSERT INTO trees (name, height, type)
    //     VALUES ( '${name}', ${parseFloat(height)}, '${type}' )
    // `;

    const sql = `
    INSERT INTO trees (name, height, type)
    VALUES ( ?, ?, ? )
`;
    connection.query(sql, [name, height, type], err => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });
});



app.post('/cut', (req, res) => {

    const id = req.body.id;

    // DELETE FROM table_name WHERE condition;

    // DELETE FROM trees WHERE id = 888 OR 1

    // const sql = `
    // DELETE FROM trees
    // WHERE id = ${id}

    const sql = `
    DELETE FROM trees
    WHERE id = ?
`;
    connection.query(sql, [id], err => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });

});




app.post('/water', (req, res) => {

    const { id, height } = req.body;

    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;

    const sql = `
    UPDATE trees
    SET height = ?
    WHERE id = ?
`;
    connection.query(sql, [parseFloat(height), id], err => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });

});





app.listen(port, _ => {
    console.log(`Trees manager are listening on port ${port}`);
});