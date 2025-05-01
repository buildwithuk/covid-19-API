const express = require('express');

const app = express();
const history = require('./history');
const statistics = require('./statistics');
const countries = require('./countries'); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://covid-19-dashboard-eight.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const PORT = 5000;

// Hello World
app.get('/', (req, res) => {

    res.status(200).json({ message: "Hello World" });
});

app.use('/api/history', history);
app.use('/api/statistics', statistics);
app.use('/api/countries', countries);

app.listen(PORT, () => {

    console.log('Listening');
});