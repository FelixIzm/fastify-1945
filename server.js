const fastify = require('fastify')();
const PORT = process.env.PORT || 8000;

fastify.register(require('fastify-cors'), { 
  // put your options here
})

// ROUTES
fastify.register(require('./routes/search'), {prefix: '/search' });
fastify.register(require('./routes/test'), {prefix: '/test' });
fastify.register(require('./routes/unit'), {prefix: '/unit' });

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen(PORT, '0.0.0.0', function(err, address){
	if(err) {
		console.log(err);
		process.exit(1);
	} else {
		console.log('Server is up and running on port '+PORT+'...');
	}

});
