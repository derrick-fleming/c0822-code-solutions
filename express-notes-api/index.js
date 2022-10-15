const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const dataNotes = data.notes;

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const id in dataNotes) {
    dataArray.push(dataNotes[id]);
  }
  res.status(200).json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const statusMessage = {};
  if (!(req.params.id >= 0)) {
    statusMessage.error = 'id must be a positive integer';
    res.status(400).json(statusMessage);
  } else if (data.notes[req.params.id] !== undefined) {
    res.status(200).json(dataNotes[req.params.id]);
  } else {
    statusMessage.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(statusMessage);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const statusMessage = {};
  if (!(Object.hasOwn(req.body, 'content'))) {
    statusMessage.error = 'content is a required field';
    res.status(400).json(statusMessage);
  } else {
    const newEntry = req.body;
    const id = data.nextId;
    newEntry.id = id;
    dataNotes[id] = newEntry;
    data.nextId = id + 1;
    const newJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newJSON, err => {
      if (err) {
        statusMessage.error = 'An unexpected error ocurred';
        console.error(err);
        res.status(500).json(statusMessage);
        process.exit(1);
      } else {
        res.status(201).json(dataNotes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const statusMessage = {};
  if (!(req.params.id >= 0)) {
    statusMessage.error = 'id must be a positive integer';
    res.status(400).json(statusMessage);
  } else if (data.notes[req.params.id] === undefined) {
    statusMessage.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(statusMessage);
  } else {
    delete data.notes[req.params.id];
    const newJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newJSON, err => {
      if (err) {
        statusMessage.error = 'An unexpected error ocurred';
        console.error(err);
        res.status(500).json(statusMessage);
        process.exit(1);
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const statusMessage = {};
  if (!(req.params.id >= 0)) {
    statusMessage.error = 'id must be a positive integer';
    res.status(400).json(statusMessage);
  } else if (!(Object.hasOwn(req.body, 'content'))) {
    statusMessage.error = 'content is a required field';
    res.status(400).json(statusMessage);
  } else if (data.notes[req.params.id] === undefined) {
    statusMessage.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(statusMessage);
  } else {
    data.notes[req.params.id] = req.body;
    data.notes[req.params.id].id = Number(req.params.id);
    const newJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newJSON, err => {
      if (err) {
        statusMessage.error = 'An unexpected error ocurred';
        console.error(err);
        res.status(500).json(statusMessage);
        process.exit(1);
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
