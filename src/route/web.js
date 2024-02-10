import express from 'express';
import homeController from '../controller/homeController.js';

let router = express.Router();

const initWebRoute = (app) =>{
    router.get('/', homeController.getHomePage);      
    router.get('/about', (req, res) => {
        res.send(`I'm Le Phuc Hung`);
    })

    return app.use('/', router)
}

export default initWebRoute;
