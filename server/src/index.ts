import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import router from './router';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import connectionOptions from './config/ormconfig';
const cookieParser: Function = require('cookie-parser');
const app: Express = express();
const port = 7070;
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
    methods: ['PATCH', 'POST', 'DELETE', 'GET', 'OPTIONS'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);
app.get('/', (req: Request, res: Response): void => {
  res.send('It is Letter Server!');
});

createConnection(connectionOptions)
  .then(() => {
    console.log('DB CONNECTION!');
    app.listen(port, () => {
      console.log('localhost ' + port + ' opened!!');
    });
  })
  .catch((error) => {
    console.log(error);
  });
