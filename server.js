const fastify = require('fastify')();
const PORT = process.env.PORT || 3000;

fastify.register(require('fastify-cors'), { 
  // put your options here
})

// ROUTES
fastify.register(require('./routes/search'), {prefix: '/search' });
fastify.register(require('./routes/test'), {prefix: '/test' });


fastify.listen(PORT, '0.0.0.0', function(err, address){
	if(err) {
		console.log(err);
		process.exit(1);
	} else {
		console.log('Server is up and running on port 3000...');
	}

});