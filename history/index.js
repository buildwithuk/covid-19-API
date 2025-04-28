const express = require('express');
const router = express.Router();
const httpRequest = require("request");
const constants = require('../constants/index');
require('dotenv').config( {path: './.env'});

router.get('/:country', (req, res) => {

    if (!req.params) {
        res.status("400").send("Region not found");
    }

    res.setHeader("Content-Type", "application/json");

    let url = constants.URLS.URL + constants.URLS.HistoryURL + "?country=" + req.params.country;
    let options = { method: 'GET', uri: url, headers: {} };
    
    options.headers = {
        "x-rapidapi-host": process.env.API_HOST,
        "x-rapidapi-key": process.env.API_KEY
    };

    httpRequest.get(url, options, (error, response, body) => {
    
        if (response.statusCode == 200) {
            res.send(body);
        } else {
            res.status("400").send("Some error occured"); 
        }
    });
});


router.get('/:country/:date', (req, res) => {

    if (!req.params) {
        res.status("400").send("Region not found");
    }

    res.setHeader("Content-Type", "application/json");

    let url = constants.URLS.URL + constants.URLS.HistoryURL + "?country=" + req.params.country +"&day=" + req.params.date;
    let options = { method: 'GET', uri: url, headers: {} };
    
    options.headers = {
        "x-rapidapi-host": process.env.API_HOST,
        "x-rapidapi-key": process.env.API_KEY
    };

    httpRequest.get(url, options, (error, response, body) => {
        if (response.statusCode == 200) {
            res.send(body);
        } else {
            res.status("400").send("Some error occured"); 
        }
    });
});

module.exports = router;