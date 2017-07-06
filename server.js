require('dotenv').config();

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './routes';

const http = require('http');
const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'Hello tole'})
});

app.use(morgan('combined'));

/*app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

/* Old method. Plain HTTP*/
app.use('/', router);

const server = app.listen(process.env.API_PORT, () => {
  const { address, port } = server.address();
});

/*app.use('/', router);
const server = https.createServer(app).listen(3000);*/