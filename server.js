const fastify = require('fastify')();

// ROUTES
fastify.register(require('./routes/users'), {prefix: '/users' });

fastify.listen(3000, function(err, address){
	if(err) {
		console.log(err);
		process.exit(1);
	} else {
		console.log('Server is up and running on port 3000...');
	}

});