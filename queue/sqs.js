const AWS = require('aws-sdk');
require('dotenv/config');
AWS.config.loadFromPath('./config.json');

AWS.config.region === undefined
  ? (AWS.config.region = process.env.AWS_REGION)
  : AWS.config.region;

const SQS = new AWS.SQS();

let options = {
  QueueName: process.env.QUEUE_NAME,
  Attributes: {
    ReceiveMessageWaitTimeSeconds: process.env.QUEUE_WAIT_TIME,
    VisibilityTimeout: process.env.QUEUE_VISIBILITY_TIMEOUT,
  },
};

SQS.createQueue(options, (error, data) => {
  if (error)
    return console.log('error --> ', error, 'error stack --> ', error.stack);
  console.log('Successfully created SQS Queue --> ', data);
});
