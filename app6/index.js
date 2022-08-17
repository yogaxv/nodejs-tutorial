// noinspection JSCheckFunctionSignatures

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
  res.send('Ini adalah halaman contact');
})

app.get("/json", (req, res) => {
  res.json({
    "status": "Ok",
    "data": []
  })
})

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(`Product dengan ID : ${req.params.id}, Category: ${req.params.idCat}`);
})

app.get("/product/:id", (req, res) => {
  res.send(`Product dengan ID : ${req.params.id}, Category: ${req.query.category}`);
})

app.use("/", (req, res)=> {
  res.status(404).send("<h1>404</h1>");
})


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})