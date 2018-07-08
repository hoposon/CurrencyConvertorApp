// 3rd party libraries
const express = require('express');
const path = require('path');

// path to content
const publicPath = path.join(__dirname, './dist');

// create express app
var app = express();
// set port
const port = process.env.PORT || 3001;

// static middleware
app.use(express.static(publicPath));


// create API to log application errors
// app.get('logErrors', ErrorMiddleware, (req, res) => {
//     res.send({
//         status: 200
//     })
// })

// start server on given port
app.listen(port,() => {
    console.log(`Started on port ${port}`);
});