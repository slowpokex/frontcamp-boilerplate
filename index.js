const express = require('express');
const { join } = require('path');

const app = express();
const DIST_FOLDER = process.env.DIST_FOLDER || './dist';
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 3000;

app.use(express.static(join(DIST_FOLDER)));
app.listen(PORT, () => console.log(`Listening at ${HOST}:${PORT}/`));
