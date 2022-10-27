const express = require('express');
const path = require('path');
const app = express();

const joinPath = path.join(__dirname, 'public');

const staticExpress = express.static(joinPath);

app.use(staticExpress);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
