async function routes (fastify, options) {
	// GET /users/:id?search=Text
	fastify.get('/:id', async (req,res) => {

        res.send({
            id: req.params.id,
            params: req.params
        });
        console.log(req.query['rdf']);
});
}

module.exports = routes;