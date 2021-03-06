const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

const indexHTML = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
const fetchOrderHTML = fs.readFileSync(`${__dirname}/fetchorder.html`, 'utf-8');
const fetchFindHTML = fs.readFileSync(`${__dirname}/fetchfind.html`, 'utf-8');
const fetchCountHTML = fs.readFileSync(`${__dirname}/fetchcount.html`, 'utf-8');
const fastestShipHTML = fs.readFileSync(`${__dirname}/fastestship.html`, 'utf-8');

app.get('/', (req, res) => {
    res.send(indexHTML);
});

app.get('/fetch-order', (req, res) => {
    res.send(fetchOrderHTML);
});

app.get('/fetch-find', (req, res) => {
    res.send(fetchFindHTML);
});

app.get('/fetch-count', (req, res) => {
    res.send(fetchCountHTML);
});

app.get('/fastest-ship', (req, res) => {
    res.send(fastestShipHTML);
});

app.use(express.static('public'));
app.listen(8000);