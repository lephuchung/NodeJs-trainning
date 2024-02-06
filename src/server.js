import express from 'express';
import configViewEngine from './configs/viewEngine.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render('index.ejs');
  });
  

app.get('/about', (req, res) => {
    res.send(`I'm Le Phuc Hung`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})  