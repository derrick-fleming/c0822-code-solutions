const fs = require('fs');
const data = require('./data.json');
const nextId = data.nextId;
const command = process.argv[2];

if (command === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (command === 'create') {
  data.notes[nextId] = process.argv[3];
  data.nextId = nextId + 1;
  updateJSONFile();
} else if (command === 'delete') {
  delete data.notes[process.argv[3]];
  updateJSONFile();
} else if (command === 'update') {
  data.notes[process.argv[3]] = process.argv[4];
  updateJSONFile();
}

function updateJSONFile() {
  const newJSON = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newJSON, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
