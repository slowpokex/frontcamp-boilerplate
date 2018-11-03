import * as express from 'express';
import { join } from 'path';

const app: express.Application = express();

const DIST_FOLDER: string = process.env.DIST_FOLDER || './dist';

const HOST: string = process.env.HOST || 'http://localhost';
const PORT: number = +process.env.PORT || 3000;

app.get('/*', express.static(join(DIST_FOLDER)));

app.listen(PORT, () => console.log(`Listening at ${HOST}:${PORT}/`));
