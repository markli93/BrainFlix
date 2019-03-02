const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/', require('./routes/Videodata.js'));

app.listen(8080, () => {
    console.log(`listening at http://localhost:8080`)
});