const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect("mongodb://aeroreborn:abc123@ds145871.mlab.com:45871/scottstestapi", (err, database) => {
    if (err) return console.log(err)
    db = database.db("scottstestapi");
    require('./app/routes')(app, db);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })