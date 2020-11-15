import 'babel-polyfill';

import express from 'express';
import helmet from 'helmet';
import moment from 'moment';
import fetch from 'node-fetch';
import 'dotenv/config';

import SQS from '../queue/sqs';

const app = express();
app.use(helmet());

const timestamp = Date.now();
const moment_timestamp = moment().utc();
const date_moment_timestamp = moment(Date.now());
const offset = new Date(moment_timestamp);
const utc_convert = new Date().toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
});
const time = {
  timestamp,
  moment_timestamp,
  date_moment_timestamp,
  offset,
  utc_convert,
};

app.use('/', async (req, res, next) => {
  return res.json({
    status: true,
    data: time,
  });
});
console.log('time --> ', time);

const PORT = process.env.PORT || process.env.DEV_SERVER_PORT;

app.listen(PORT, error => {
  if (error) console.log('An error occured --> ', error);
  console.log(`Server started on port ${PORT}...`);
  console.log('env --> ', process.env);
});
