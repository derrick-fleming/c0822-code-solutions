const fs = require('fs');
let dataOutput = '';

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  dataOutput = dataOutput + data + '\n';
});

fs.writeFile(process.argv[3], dataOutput, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
