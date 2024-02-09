import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import dotevn from 'dotenv';
dotevn.config();

const app = express();
const port = process.env.PORT || 3000;
console.log('check:', port);

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
  });
  

app.get('/about', (req, res) => {
    res.send(`I'm Le Phuc Hung`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})  