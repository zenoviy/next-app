const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const appModules = require('./modules');



const app = express();

app.use('/media', express.static(__dirname + '/public/images'));
app.use( express.static(path.join(__dirname + '/public')));

app.get('/', appModules.welcomePage)


app.get('/all-products', cors(), appModules.getAllProducts)

app.get('/data', (req, res) => {
    const dummyData = [
        {
            id: 1,
            name: "test 1"
        }, {

            id: 2,
            name: "test 2"
        }
    ];
    //res.setHeader("Accept", "application/json");
    res.setHeader("Content-type", "application/json");
    res.send(JSON.stringify(dummyData));
});


const _PORT = "3300";

app.listen(_PORT, (err) => {
    if(err) return console.log(`Error has been occured: ${err}`)
    console.log(`App run and listened on port ${_PORT}`)
})


