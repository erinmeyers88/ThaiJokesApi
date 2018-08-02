import express from 'express';
import {MongoClient} from 'mongodb';
import bodyParser from 'body-parser';
import routes from './routes';
import db from './db';

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  const db = database.db("thai-jokes");

  routes(app, db);
  app.listen(port, () => {
    console.log('Listening on port ', port);
  });

});

//https://www.dek-d.com/board/view/2326563/

