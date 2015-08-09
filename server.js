///////////////////////////////////////////
//      INJECTIONS
///////////////////////////////////////////
var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')

// Initiate app
var app = express();


///////////////////////////////////////////
//      MIDDLEWARE
///////////////////////////////////////////
app.use(express.static('/public'));
app.use(cors());
app.use(bodyParser());


///////////////////////////////////////////
//      ENDPOINTS
///////////////////////////////////////////



///////////////////////////////////////////
//      SERVER
///////////////////////////////////////////
var port = process.env.API_PORT || 3015;

app.listen(port, function() {
    console.log('Watch out... I\'m coming..', port);
});