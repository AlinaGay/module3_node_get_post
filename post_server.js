var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.post('/pages/send', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.firstname,
        last_name:req.body.lastname
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})