const routes = [
  {
    url: "/products",
    method: "GET",
    handler: (request, reply) => {
      reply.send("products");
    },
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: (request, reply) => {
      reply.send("single product");
    },
  },
  {
    url: "/products",
    method: "POST",
    handler: (request, reply) => {
      reply.send("create product");
    },
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: (request, reply) => {
      reply.send("deleting a product");
    },
  },
  {
    url: "/products/:id",
    method: "PATCH",
    handler: (request, reply) => {
      reply.send("updating a product");
    },
  },
];

module.exports = routes;
