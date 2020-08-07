const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

const apiRandomUser = "https://randomuser.me/api/";

const indexHTML = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
const fetchOrderHTML = fs.readFileSync(`${__dirname}/fetchorder.html`, 'utf-8');
const fetchFindHTML = fs.readFileSync(`${__dirname}/fetchfind.html`, 'utf-8');
const fetchCountHTML = fs.readFileSync(`${__dirname}/fetchcount.html`, 'utf-8');
const fastestShipHTML = fs.readFileSync(`${__dirname}/fastestship.html`, 'utf-8');
const planetsByTerrainHTML = fs.readFileSync(`${__dirname}/planetterrain.html`, 'utf-8');

const replaceTemplateFetchOrder = (template, obj) => {
    let output = template.replace(/{%NOMBRE%}/g, obj.results[0].name.first);
    output = output.replace(/{%APELLIDO%}/g, obj.results[0].name.last);
    output = output.replace(/{%EDAD%}/g, obj.results[0].dob.age);
    output = output.replace(/{%PAIS%}/g, obj.results[0].location.country);
    output = output.replace(/{%EMAIL%}/g, obj.results[0].email);
}

app.get('/', (req, res) => {
    res.send(indexHTML);
});

app.get('/fetch-order', (req, res) => {
    https.get(apiRandomUser, (res) => {

        let body = '';

        res.on('data', (d) => {
            body += d;
        });

        res.on('end', () => {
            let data = JSON.parse(body);
            console.log(data.results[0].name.first, data.results[0].name.last);
        });

    }).on('error', (e) => {
        console.error(e);
    });

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

app.get('/planet-terrain', (req, res) => {
    res.send(planetsByTerrainHTML);
});

app.use(express.static('public'));
app.listen(8000);