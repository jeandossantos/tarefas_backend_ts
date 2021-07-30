import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());

// eslint-disable-next-line no-console
app.listen(3001, () => console.log('backend running on port 3001...'));
