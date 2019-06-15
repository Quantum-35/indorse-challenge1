import express from 'express';
import dotenv from 'dotenv';

import globalMiddleware from './middleware/globalMiddleware';
import api from './api/routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

globalMiddleware(app);

app.use('/api', api)

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})