var express = require('express');
var cors = require('cors');

const = app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
	response.send('Hello World!')
});

app.get('/users', function(req, res) {
	// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{"id": 1, "firstName": "BOB", "lastName": "N/A", "email": "BOB@domain.com"},
		{"id": 2, "firstName": "Dale", "lastName": "Cooper", "email": "coffee@domain.com"},
		{"id": 3, "firstName": "Dougie", "lastName": "Jones", "email": "dougie@domain.com"}
	]);
});

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});
