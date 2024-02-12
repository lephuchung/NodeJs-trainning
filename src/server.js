import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import dotevn from 'dotenv';
import initWebRoute from './route/web.js'
dotevn.config();
// import connection from './configs/connectDB.js';

const app = express();
const port = process.env.PORT || 3000;
console.log('check:', port);

configViewEngine(app);
initWebRoute(app);
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})  