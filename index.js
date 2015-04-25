var express = require('express');
var bodyParser = require('body-parser');
var app = express()

// express configs
var app = module.exports = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	var monsters = [
		{
			name: 'jubjub',
			weapon: 'sword',
			health: 100
		},
		{
			name: 'goblin',
			weapon: 'axe',
			health: 70
		}
	]
	
	res.json(monsters);
});

app.get('/ela', function(req, res){
	res.send('hai elaaa');
});

var port =  process.env.OPENSHIFT_NODEJS_PORT || 3000;   // Port 8080 if you run locally
var host =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally

app.listen(port, address);
console.log('Server running on http://127.0.0.1:3000');