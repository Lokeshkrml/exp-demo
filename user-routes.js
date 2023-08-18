import express from 'express';
import { userController } from '../controllers/user-controller.js';
export const userRoutes=express.Router();
userRoutes.get('/profile',userController.profile);
userRoutes.post('/login',userController.login);
userRoutes.post('/register',userController.register);
userRoutes.put('/change-password',userController.changePassword);
// export default routes;