exports.option = {
  routePrefix: "/docs",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Node.js Fastify MongoDb Api",
      description: "Test swagger docs for learning fastify and it's plugin",
      version:'0.0.1'
    },
    externalDocs: {
      url:'htpps://swagger.io',
      description:'Find more info here'
    }
  },
  host:'localhost:3000',
  schemas:["http"],
  consumes:["application/json"],
  produces: ["application/json"]
};
