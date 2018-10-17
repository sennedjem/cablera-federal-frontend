/**
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

//PathLocationStrategy

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');
 */

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/cablera-federal-frontend'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/cablera-federal-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);