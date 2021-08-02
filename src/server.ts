/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'reflect-metadata';
import 'express-async-errors';
import './database/connection';
import { routes } from './routes';
import { CustomException } from './exception/CustomException';

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(routes);

app.use(
  (
    error: CustomException | Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (error instanceof CustomException) {
      return res.status(error.code).send(error.message);
    }

    if (error instanceof Error) {
      console.error(error.message);
    }
    return res.status(500).send('Internal Error');
  },
);

app.listen(3001, () => console.log('backend running on port 3001...'));
