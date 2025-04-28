const express = require('express');
const router = express.Router();
const constants = require('../constants/index');
const httpRequest = require("request");
require('dotenv').config( {path: './.env'});

router.get('/', (req, res) => {

    res.setHeader("Content-Type", "application/json");

    let url = constants.URLS.URL + constants.URLS.CountryURL;
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

router.get('/:name', (req, res) => {
    
    res.setHeader("Content-Type", "application/json");
    if (!req.params) {
        res.status(400).send("Region not found");
    }
    let region = req.params.name;
    let url = constants.URLS.URL + constants.URLS.CountryURL + "?search=" + region;
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