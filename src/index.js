const fastify = require('fastify')({
    logger: true
})

fastify.get('/',(request,reply) => {
    reply.send({hello: 'world'})
})


const start = async () => {
    fastify.listen({port: 3000,host:'0.0.0.0'},function(err,address) {
        if(err) {
            console.log(err)
            fastify.log.error(err);
            process.exit(1)
        }
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
    })
}

start()