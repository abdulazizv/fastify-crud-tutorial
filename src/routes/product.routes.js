const productService = require("../services/product.service")

const routes = [
  {
    url: "/products",
    method: "GET",
    handler: productService.getProducts
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productService.getProduct
  },
  {
    url: "/products",
    method: "POST",
    handler: productService.createProduct
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productService.deleteProduct
  },
  {
    url: "/products/:id",
    method: "PATCH",
    handler: productService.updateProduct
  },
];

module.exports = routes;
