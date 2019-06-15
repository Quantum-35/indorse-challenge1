import { Router } from 'express';


const authRoute = Router();

authRoute.get('/signup', (req, res) => res.send("Hello world"));

export default authRoute;