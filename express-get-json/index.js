const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

function gradeArray(object) {
  const gradeArray = [];
  for (const key in object) {
    gradeArray.push(object[key]);
  }
  return gradeArray;
}

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(gradeArray(grades));
}
);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
