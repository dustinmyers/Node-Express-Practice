///////////////////////////////////////////
//      DEPENDENCIES
///////////////////////////////////////////
var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , path = require('path');

// Initiate app
var app = express();


///////////////////////////////////////////
//      MIDDLEWARE
///////////////////////////////////////////
app.use(express.static('./public'));        //Serves html, JS, Angular files
app.use(cors());                            //sends headers
app.use(bodyParser.urlencoded({             //Parses all requests to JSON
    extended: true
}));           
app.use(bodyParser.json());                      

var positiveMessage = {
    "message": "You so totally rock, man!!!"
}
var rudeMessage = {
    "message": "You suck at life!!!"
}
///////////////////////////////////////////
//      ENDPOINTS
///////////////////////////////////////////
app.get('/api/testData/:attitude', function(req, res) {
    console.log("req.params: ", req.params);
    console.log("req.params.attitude: ", req.params.attitude);
    if(req.params.attitude === 'positive') {
		res.send(JSON.stringify(positiveMessage));
    }
    if(req.params.attitude === 'rude') {
		res.send(JSON.stringify(rudeMessage));
    }
});


///////////////////////////////////////////
//      SERVER
///////////////////////////////////////////
// var port = process.env.PORT || 3015;

app.listen(process.env.PORT, process.env.IP);
console.log('Powering on...');
console.log('Paired');