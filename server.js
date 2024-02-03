const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send(`Hello world from nodeJs`);
})

app.get('/about', (req, res) => {
    res.send(`I'm Le Phuc Hung`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})