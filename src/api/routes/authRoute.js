import { Router } from 'express';

import AuthController from '../controllers/auth';
import { validateRequest, validateUsername, validateEmail }  from '../../middleware/validateRequest';


const authRoute = Router();
const { signup, login , verifyEmail} = AuthController;

authRoute.post('/signup', validateRequest('signup'), validateUsername, validateEmail, signup);
authRoute.post('/login', login);
authRoute.post('/verify-email', verifyEmail);

export default authRoute;