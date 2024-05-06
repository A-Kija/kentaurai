const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());




app.listen(port, _ => {
    console.log(`040 app listening on port ${port}`);
});