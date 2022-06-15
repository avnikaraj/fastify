
const fastify = require('fastify')({ 
    logger: true 
});

fastify.register(require('fastify-swagger'),{
  exposeRoute: true,
  routePrefix: '/docs',
  swegger: {
    info: { title: 'fastify-api'},
  },
})
fastify.register(require('./routes/items'))
const PORT = 3000

const start = async () => {
    try {
      await fastify.listen(PORT);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start()