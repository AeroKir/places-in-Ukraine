const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const MongoClient = require('mongodb').MongoClient;

const app = express();
const config = require('./webpack.dev.js');

const compiler = webpack(config);

// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/index.html`);
//   console.log(__dirname);
// });

// app.post('/places', (req, res) => {
//   console.log('Ok!');
// });


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

// let db;

// MongoClient.connect('mongodb://routes:routeadbadmin1@ds263740.mlab.com:63740/test-routes', (err, database) => {
//   if (err) return console.log(err);
//   db = client.db('test-routes');
// });

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));
