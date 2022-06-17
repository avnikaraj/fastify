const { build } = require('./app')

const app = build({ logger: true },
    {
        exposeRoute: true,
        routePrefix: '/docs',
        swagger: { info: { title: "Fastify-API", version: "1.0.0" } }
    }, {
    connectionString: "postgres://postgres:postgres@localhost:5432/postgres"

});



app.listen(5000, function (err, address) {

    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})
