const fs = require('fs');

catFile(2);
function catFile(i) {
  if (i === process.argv.length) {
    return;
  }
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
    catFile(i + 1);
  });
}
