require('dotenv').config();
const express = require("express");

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/twitter', (req,res) => {
    res.send('Rohan');
});

app.get('/login', (req,res) => {
    res.send('<h1>Please login at chai and code</h1>');
});

app.get('/youtube', (req,res) => {
    res.send('<h1>Chai aur Code</h2>')
});



app.listen(process.env.PORT, () => {
    console.log(`Example app on port no ${process.env.PORT}`);
});
