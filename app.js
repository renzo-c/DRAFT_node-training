const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
  console.log('this always runs, is a middleware');
  next(); // next allows the request to continue to the next middleware
});

app.use('/add-product', (req, res, next) => {
  console.log('this is route add-product');
  res.send(
    '<form action="/product" method="POST"><input type="text" name=" "><button type="submit">Add Product</button></form>'
  );
});

app.post('/product', (req, res) => {
  console.log('req.body!!!', req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('this is the main page');
  // .send is a new method provided by express which allows us to send html content.
  // It is not needed to define header text/html since send does it by default
  res.send('<div>Hello from Express!</div>');
});

const server = http.createServer(app);

server.listen(3000);
