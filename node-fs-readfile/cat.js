const fs = require('fs');
let dataStorage = '';
let boolean = false;

for (let i = 2; i < process.argv.length; i++) {
  const fileName = process.argv[i];
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    dataStorage = dataStorage + data + '\n';
    if (i === process.argv.length - 1) {
      boolean = true;
    }
    if (boolean === true) {
      console.log(dataStorage);
    }
  });
}
