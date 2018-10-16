'use strict';
const express = require('express');

const Question = require('../models/question');

const router = express.Router();

const data = require('../db/question-data');

router.get('/', (req, res, next) => {
  res.json(data);
});
