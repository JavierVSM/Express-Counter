const express = require( 'express' );
var session = require('express-session');

const app = express();
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

let count =0;

app.get("/", function (req, response){
    count++;    
    response.render('index', {count: count});
})

app.get("/plus", function (req, response){
    count=count+2;    
    response.redirect( '/' );
})

app.get("/destroy", function (req, response){
    count=0;  
    response.redirect( '/' );
})
app.listen(8000, function() {
    console.log("listening on port 8000");
  })