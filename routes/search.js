async function routes (fastify, options) {

	// GET /users/:id?search=Text
	fastify.get('/:id', async (req,res) => {
		res.send({
			id: req.params.id,
			firstName: "Jhon",
			lastName: "Smith",
			query: req.query,
			params: req.params
		});
	});
};

module.exports = routes;