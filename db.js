const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-demo', (err) => {
	if(!err)
		console.log("Database Connected");
	else
		console.log('Error in COnnection : '+ JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;