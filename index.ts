import * as express from 'express';
import { resolve } from 'path';

const app: express.Application = express();

const DIST_FOLDER: string = process.env.DIST_FOLDER || './dist';

const HOST: string = process.env.HOST || 'http://localhost';
const PORT: number = +process.env.PORT || 3000;

app.get('/*', express.static(resolve(DIST_FOLDER)));

app.listen(PORT, () => console.log(`Listening at ${HOST}:${PORT}/`));
