import express from 'express';
import homeController from '../controller/homeController.js';

let router = express.Router();

const initWebRoute = (app) =>{
    router.get('/', homeController.getHomePage);      
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/get-edit-page/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser);
    router.get('/about', (req, res) => {
        res.send(`I'm Le Phuc Hung`);
    })

    return app.use('/', router)
}

export default initWebRoute;