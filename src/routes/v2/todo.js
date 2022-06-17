const { vatCalculator } = require("../../utlis/vatCalculator");

const {postTodoOpts} = require('./index');



const todoRoutes_v2 = async (fastify, options, done) => {

    fastify.get('/', async (request, reply) => {

        try {
            const { rows } = await fastify.pg.query('SELECT * FROM todos');
            reply.send(rows);
        } catch (err) {
            reply.send(err);
        }
    })

    fastify.get('/:id', async (request, reply) => {
        try {
            const { id } = request.params;
            const { rows } = await fastify.pg.query('SELECT * FROM todos WHERE id = $1', [id]);
            reply.send(rows[0]);
        } catch (error) {
            reply.send(error);

        }
    })

    fastify.put('/:id', async (request, reply) => {

        try {
            const { id } = request.params;
            const { name, description,groos_amount } = request.body;
            const { rows } = await fastify.pg.query('UPDATE todos SET  name=$1,description=$2,groos_amount=$3 WHERE id = $4 RETURNING *', [name, description,groos_amount, id]);
            reply.send(rows[0]);
        } catch (error) {
            reply.send(error);

        }
    })

    fastify.delete('/:id', async (request, reply) => {

        try {
            const { id } = request.params
            await fastify.pg.query('DELETE FROM todos WHERE id = $1', [id]);
            reply.send({ message: 'Todo deleted' });
        } catch (error) {

        }
    })

    fastify.post('/', postTodoOpts, async (req, reply) => {
        try {
            const { name, description, groos_amount } = req.body
            const netAmount = vatCalculator.calculateNetAmount(groos_amount);
            const vatAmount = vatCalculator.calculateVat(netAmount)
            const { rows } = await fastify.pg.query("INSERT INTO todos (name, description, groos_amount, net_amount, excluded_vat_amount) VALUES ($1,$2,$3,$4,$5) RETURNING*",
                [name, description, groos_amount, netAmount, vatAmount]);
            reply.code(201).send(rows[0])
        } catch (error) {
            reply.send(error);
        }

    })
    done();



}

module.exports = { todoRoutes_v2 };