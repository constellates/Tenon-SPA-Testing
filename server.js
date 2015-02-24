// dependencies ------------------------------------------------------------------------------

var express = require('express');
var app     = express();

// configuration -----------------------------------------------------------------------------

app.use(function (req, res, next) {

    // allow CORS
    res.setHeader('Access-Control-Allow-Origin', '*');

    // allowed methods
    res.setHeader('Access-Control-Allow-Methods', '*');

    // request headers
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // allow session credentials
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();

});

// routing -----------------------------------------------------------------------------------

    /**
     *  All requests to static files in the app/ directory will be served.
     *  All other requests will return index.html.
     *  This allows us to remove the # from angular routing with functional page refreshes.
     */

app.use(express.static(__dirname + '/app'));

app.get('*',function(req,res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.sendFile('/index.html', {root:__dirname + '/app'});
});

// server ------------------------------------------------------------------------------------

app.listen(3000, function() {
    console.log("Listening on 3000");
});
