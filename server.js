const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const dogs = require('./routes/dogs');
// const ownersDogs = require('./routes/owners_dogs');
const owners = require('./routes/owners');

const port = 8080 || process.env.port;
const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());
// app.use(morgan);
app.use(express.static(path.join('public')));
app.use(owners);
app.use(dogs);
// app.use(ownersDogs);


app.listen(port, (err) => {
    if (err) {
        throw err
    };
    console.log('server listening on port:', port);
});
