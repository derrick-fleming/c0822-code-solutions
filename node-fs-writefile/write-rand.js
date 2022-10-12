const fs = require('fs');
const randomNumber = Math.random().toString() + '\n';

fs.writeFile('random.txt', randomNumber, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
