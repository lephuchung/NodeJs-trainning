import express from 'express';
import APIController from '../controller/APIController.js'

let router = express.Router();

const initAPIRoute = (app) =>{
    router.get('/users', APIController.getAllUsers);// Method get -> Read data
    router.post('/create-new-user', APIController.createNewUser);// Method post -> Create data
    router.put('/update-user', APIController.updateUser);// Method put -> Update data
    router.delete('/delete-user/:id', APIController.deleteUser);// Method delete -> Delete data
    
    return app.use('/api/v1', router)
}

export default initAPIRoute;