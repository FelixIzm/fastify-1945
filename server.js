const fastify = require('fastify')();
const PORT = process.env.PORT || 3000;

// ROUTES
fastify.register(require('./routes/users'), {prefix: '/users' });

fastify.listen(PORT, function(err, address){
	if(err) {
		console.log(err);
		process.exit(1);
	} else {
		console.log('Server is up and running on port 3000...');
	}

});