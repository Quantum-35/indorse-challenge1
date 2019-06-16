import express from 'express';

import authRoute from './authRoute';

const api = express();

api.use('/auth', authRoute);

export default api;