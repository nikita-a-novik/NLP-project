var path = require('path')
const express = require('express')
const { 
    getURL,
    getSummary,
    unpackSummary
} = require('./utils')

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: "dd885f10",
    application_key: "0afe079b57b722a8790ea4d89f99c17b"
})

const app = express()

app.use(express.static('dist'))

app.get('/', function (req, res) {
    console.log(path.join(__dirname, './dist/index.html'))
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/summary', function (req, res) {
    const URL = getURL(req)
    getSummary(URL, (...r) => {
        console.warn(r);
        res.send(JSON.stringify(unpackSummary(...r)))
    }, textapi)
})
