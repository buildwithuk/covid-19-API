const express = require('express');
const router = express.Router();
const httpRequest = require("request");
const constants = require('../constants/index');

router.get('/:country', (req, res) => {
    
    if (!req.params) {
        res.status("400").send("Region not found");
    }

    res.setHeader("Content-Type", "application/json");

    let url = constants.URLS.URL + constants.URLS.StatisticsURL + "?country=" + req.params.country;
    let options = { method: 'GET', uri: url, headers: {} };
    
    options.headers = {
        "x-rapidapi-host": constants.API_KEY.API_HOST,
        "x-rapidapi-key": constants.API_KEY.API_KEY
    };

    httpRequest.get(url, options, (error, response, body) => {
    
        if (response.statusCode == 200) {
            res.send(body);
        } else {
            res.status("400").send("Some error occured"); 
        }
    });
});

router.get('/', (req, res) => {
    
    res.setHeader("Content-Type", "application/json");

    let url = constants.URLS.URL + constants.URLS.StatisticsURL;
    let options = { method: 'GET', uri: url, headers: {} };
    
    options.headers = {
        "x-rapidapi-host": constants.API_KEY.API_HOST,
        "x-rapidapi-key": constants.API_KEY.API_KEY
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