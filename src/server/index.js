var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: "dd885f10",
    application_key: "0afe079b57b722a8790ea4d89f99c17b"
})

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    console.log(path.join(__dirname, './dist/index.html'))
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

function getURL(req) {
    let URL = req.query.url;
    return URL;
};

function getSummary(URL, cb){
  textapi.summarize({ url: URL }, cb)
}; 

app.get('/summary', function (req, res) {
    const URL = getURL(req)
    getSummary(URL, (...summary) => {
        console.warn(summary)
        res.send(summary[1].sentences)
    })
})
