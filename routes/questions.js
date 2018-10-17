'use strict';
const express = require('express');

const Question = require('../models/question');

const router = express.Router();
const passport = require('passport');

const data = require('../db/question-data');
const jwt = require('jsonwebtoken');

const jwtAuth = passport.authenticate('jwt', { session: false });
router.use(jwtAuth);
console.log(jwtAuth);

router.get('/', (req, res, next) => {
  const userId = req.user.id;
  console.log(userId);
  let filter = { userId };
  Question.find(filter)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const err = new Error(`The 'id' is not valid`);
    err.status = 400;
    return next(err);
  }

  Question.findOne({ _id: id, userId })
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  console.log(userId);
  const newObj = { title, content, userId };
  console.log(newObj);

  Question.create(newObj)
    .then(result => {
      res
        .location(`${req.originalUrl}/${result.id}`)
        .status(201)
        .json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
