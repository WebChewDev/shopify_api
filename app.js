require("dotenv").config();
const axios = require("axios");
const Metafield = require("./api/metafields/index");
const meta = new Metafield(6759438581914,  19472993157274);

meta.getMetafields();
// meta.createMetafield()
// meta.deleteMetafield()

const fetchMeta = () => {
  axios
    .get(
      "https://40976bb1fdffc29d9342cb38f3cf9e8c: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@db-dev-testing.myshopify.com/admin/products/6759438745754/metafields.json"
    )
    .then((res) => console.log(res.data))
    .catch((err) => err);
};

