import express from "express"
import {home} from './src/controller/homeController.js';
import {login,registerUser,updateUser,deleteUSer} from'./src/controller/loginController.js';

const route = express.Router();

route.get('/',home);
route.get('/login', login);
route.post('/login/register', registerUser);
route.put('/login/update/:id', updateUser);
route.delete('/login/delete/:id', deleteUSer);


export default route;