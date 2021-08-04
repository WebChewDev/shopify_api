const template = require("./api/metafields/models");
// namespace / key / value / value_type 
const sample = template("header", "size", "leg-length", "string");

const Metafield = require("./api/metafields/index");
const meta = new Metafield(6759438778522, 19851722555546);

const Products = require('./api/products/index')
const product = new Products(6759438581914)

product.getProducts()
// meta.getMetafields();
// meta.createMetafield(sample)
// meta.updateMetafield()

// meta.deleteMetafield()



/* 
 --- TASKS ---
* Connect and test shopify webhook.
* Create product class. Add endpoints to routes

 --- TODO ---
* Once the webhook fires,find a way to get the id of the newly created product.
* Need to detect when the newest product has been been created
* Create axios instance. Add base url to config
*/