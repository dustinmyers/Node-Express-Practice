///////////////////////////////////////////
//      INJECTIONS
///////////////////////////////////////////
var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors');

// Initiate app
var app = express();


///////////////////////////////////////////
//      MIDDLEWARE
///////////////////////////////////////////
app.use(express.static('/public'));         //Serves html, JS, Angular files
app.use(cors());                            //sends headers
app.use(bodyParser());                      //Parses all requests to JSON


///////////////////////////////////////////
//      ENDPOINTS
///////////////////////////////////////////



///////////////////////////////////////////
//      SERVER
///////////////////////////////////////////
var port = process.env.API_PORT || 3015;

app.listen(port, function() {
    console.log('Powering on.... Paired: ', port);
});