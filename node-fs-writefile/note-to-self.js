const fs = require('fs');
const phrase = process.argv[2] + '\n';

fs.writeFile('note.txt', phrase, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
