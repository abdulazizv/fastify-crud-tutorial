const Product = require("../models/product.model");

async function getProducts (request,reply) {
    const products = await Product.find()
    return products;
};

async function getProduct (request,reply) {
    const product = await Product.findById(request.params.id)
    return product;
};

async function createProduct (request,reply) {
    const newProduct = new Product(request.body)

    await newProduct.save()

    reply.code(201).send(newProduct)
}

async function deleteProduct(request,reply) {
    await Product.findByIdAndDelete(request.params.id)
    
    reply.code(204).send({
        message:"Successfully deleted",
        status:"OK"
    })
}

async function updateProduct(request,reply) {
    const newPr = await Product.findByIdAndUpdate(request.params.id,request.body,{new: true});
    return reply.code(202).send(newPr)

}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}