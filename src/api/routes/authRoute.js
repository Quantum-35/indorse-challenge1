import { Router } from 'express';

import AuthController from '../controllers/auth';
import validateRequest from '../../middleware/validateRequest';


const authRoute = Router();
const { signup, login , verifyEmail} = AuthController;

authRoute.post('/signup', validateRequest('signup'), signup);
authRoute.post('/login', login);
authRoute.post('/verify-email', verifyEmail);

export default authRoute;