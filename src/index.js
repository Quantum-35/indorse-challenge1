import 'regenerator-runtime';
import express from 'express';
import dotenv from 'dotenv';

import globalMiddleware from './middleware/globalMiddleware';
import api from './api/routes';
import db from './sequelize/models/index';

const { sequelize } = db;

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

globalMiddleware(app);

app.use('/api', api)


app.use('/', (req, res) => {
    res.status(200).send({
      status: 200,
      message: {
        message: 'post to /api/auth/signup to signup',
      }
    });
  });

app.use((req, res) => {
    res.status(404).send({
      status: 404,
      error: {
        message: 'Page Not found',
      }
    });
  });

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Database Connected Successfully.Server running at port ${port} in ${process.env.NODE_ENV} mode`);
    })
})

export default app;