const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/query', (req, res) => {

  const name = req.query.n;
  const surname = req.query.s;

  res.json({
    mesage: 'OK',
    got: {
      name, surname
    }
  });
});


app.get('/params/:n/:s', (req, res) => {

  const name = req.params.n;
  const surname = req.params.s;

  res.json({
    mesage: 'OK',
    got: {
      name, surname
    }
  });
});



app.post('/body', (req, res) => {

  const name = req.body.name;
  const surname = req.body.surname;

  res.json({
    mesage: 'OK',
    got: {
      name, surname
    }
  });
});


app.listen(port, () => {
  console.log(`039 app listening on port ${port}`);
});