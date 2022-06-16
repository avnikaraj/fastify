const fastify = require ('fastify')

const fastifySwagger = require('@fastify/swagger')

const {itemRoutes} = require('./routes/items')


const build = (opts={}, optsSwagger={}) => {
    
    const app = fastify(opts)
    app.register(fastifySwagger,optsSwagger)
    app.register(itemRoutes)
    return app
}

module.exports = {build}