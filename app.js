require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
const verify = require('./api/controllers/helper')
const models = require('./api/models/metafieldModels')

const Metafield = require('./api/controllers/metafieldController')
const Products = require('./api/controllers/productController')

const product = new Products()
// const getProduct = product.getProducts()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


// listens for a product creation event
app.post('/webhooks/product/create', (req, res) => {
    res.sendStatus(200)
    const products = req.body

    let productId;

    products.variants.forEach((item) => {
        productId = item['product_id']
    })

    const meta = new Metafield(productId)

    meta.createMetafield()
    meta.getMetafields()

    // console.log(meta)
    // console.log(products)
})


console.log(models(20391))


app.listen(3001, () => {
    console.log(`Server is running on: ${port} | Started at: ${new Date().toString()}`)
})



/* 
 --- TASKS ---
* Connect and test shopify webhook.
* Create product class. Add endpoints to routes
* Refactor folders using API conventions

 --- TODO ---
* Once the webhook fires,find a way to get the id of the newly created product.
* Need to detect when the newest product has been been created
* Create axios instance. Add base url to config
*/



// const template = require("./api/metafields/models");

// const sample = template("header", "size", "leg-length", "string");

// const Metafield = require("./api/metafields/index");
// const meta = new Metafield(6759438778522, 19851722555546);

// const Products = require('./api/products/index')
// const product = new Products(6759438581914)

// product.getProducts()