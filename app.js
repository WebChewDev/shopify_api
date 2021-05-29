require("dotenv").config();
const axios = require("axios");
const Metafield = require("./api/metafields/index");
const meta = new Metafield(6759438581914, 19473471635610);

// meta.getMetafields();
// meta.createMetafield()
// meta.deleteMetafield()
meta.log()




