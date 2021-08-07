require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
const verify = require('./api/products/helper')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));







app.post('/webhooks/orders/create', async (req, res) => {
    verify.verifyHMAC(req)
    console.log(req,res)
})

app.post('/webhooks/product/create', async (req, res) => {
    verify.verifyHMAC(req)
    console.log(req.body)
})


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