const fastify = require ('fastify')

const fastifySwagger = require('@fastify/swagger')
const fastifyPostgres = require('@fastify/postgres')

const {todoRoutes} = require('./routes/index')
const {todoRoutes_v2} = require('./routes/v2/todo')

const build = (opts={}, optsSwagger={},optsPostgres={}) => {
    
    const app = fastify(opts)
    app.register(fastifyPostgres,optsPostgres)
    app.register(fastifySwagger,optsSwagger)
    app.register(todoRoutes, {prefix: '/v1'})
    app.register(todoRoutes_v2, {prefix: '/v2'})
    return app
}

module.exports = {build}