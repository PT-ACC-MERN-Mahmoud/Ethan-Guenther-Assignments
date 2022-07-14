const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
    Product.create(req.body)

    .then(newProduct => res.json(newProduct))
    .catch(err => res.json(console.log("there is a problem in the controllers"),err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()

    .then((getAll) => {
        console.log(getAll);
        res.json(getAll);
    })
        
    .catch(err => res.json(console.log("There was an error getting all products", err)));
}


module.exports.getOneById = (req, res) => {
    Product.findOne({_id: req.params.id})

    .then((productById) => {
        console.log(productById);
        res.json(productById);
    })

    .catch((err) => res.json(console.log("There was an error getting product by ID", err
    )))

}