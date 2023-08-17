const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();



//TemplateEngine

app.set("view engine", "ejs")

//MiddleWares
app.use(express.static('public'));



app.get('/', (req , res)=>{
    res.render('index');
});
app.get('/about', (req , res)=>{
  res.render('about');
});
app.get('/add', (req , res)=>{
  res.render('add');
});

const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda basladi`);
});
