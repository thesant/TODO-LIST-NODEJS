import express from "express"
import {home,registerTask} from './src/controller/homeController.js';
import {login,loginUser,registerUser,updateUser,deleteUSer} from'./src/controller/loginController.js';

const route = express.Router();

route.get('/dashboard',home);
route.post('/register-task',registerTask);

route.get('/', login);
route.post('/login/user', loginUser);
route.post('/login/register', registerUser);
route.put('/login/update/:id', updateUser);
route.delete('/login/delete/:id', deleteUSer);


export default route;