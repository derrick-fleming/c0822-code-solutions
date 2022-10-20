const express = require('express');
const app = express();
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const reqName = req.body.name;
  const reqCourse = req.body.course;
  const reqScore = Number(req.body.score);
  if (reqName === undefined || typeof reqName !== 'string') {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  }
  if (reqCourse === undefined || typeof reqCourse !== 'string') {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  }
  if ((!Number.isInteger(reqScore)) || reqScore < 0) {
    res.status(400).json({
      error: 'score must be a positive integer'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const params = [reqName, reqCourse, reqScore];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const reqName = req.body.name;
  const reqCourse = req.body.course;
  const reqScore = Number(req.body.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  } else if (reqName === undefined || typeof reqName !== 'string') {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  } else if (reqCourse === undefined || typeof reqCourse !== 'string') {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  } else if ((!Number.isInteger(reqScore)) || reqScore < 0) {
    res.status(400).json({
      error: 'score must be a positive integer'
    });
    return;
  }
  const sql = `
    update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
      where "gradeId" = $1
      returning *
  `;
  const params = [gradeId, reqName, reqCourse, reqScore];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
