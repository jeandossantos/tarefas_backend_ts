import { createConnection } from 'typeorm';

// eslint-disable-next-line no-console
createConnection().then(() => console.log('Database is connected...'));
