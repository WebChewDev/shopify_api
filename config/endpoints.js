require("dotenv").config();

const https = "https://";
const store = "@db-dev-testing.myshopify.com";
const adminApi = process.env.ADMIN_API;
const apiPwd = process.env.API_PASSWORD;
const baseUrl = `${https}${adminApi}:${apiPwd}${store}`;

module.exports = {
  /*
    - Metafields endpoints -
  */
  allMetafields: (productId) =>
    `${baseUrl}/admin/api/2021-04/products/${productId}/metafields.json`,
  singleMetafield: (productId, metaId) =>
    `${baseUrl}/admin/products/${productId}/metafields/${metaId}.json`,
  updateMetafield: (metaId) =>
    `${baseUrl}/admin/api/2021-04/metafields/${metaId}.json`,
  deleteMetafield: (metaId) =>
    `${baseUrl}/admin/api/2021-04/metafields/${metaId}.json`,
  collections: (metaId) =>
    `${baseUrl}/admin/api/2021-04/metafields/${metaId}.json`,
  /* 
    - Products endpoints -
  */

  allProducts: `${baseUrl}/admin/api/2021-07/products.json`

};