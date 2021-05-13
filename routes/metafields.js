require("dotenv").config();

const https = "https://";
const store = "@the-bike-club-uk.myshopify.com";
const ADMIN_API = process.env.ADMIN_API;
const API_PASSWORD = process.env.API_PASSWORD;

const baseUrl = `${https}${ADMIN_API}:${API_PASSWORD}${store}`;

module.exports = {
  allMetafields: (id) =>
    `${baseUrl}/admin/api/2021-04/products/${id}/metafields.json`,
  metafieldId: (id, metaId) =>
    `${baseUrl}/admin/api/2021-04/products/${id}/metafields/${metaId}.json`,
  updateMetafield: (metaId) =>
    `${baseUrl}/admin/api/2021-04/metafields/${metaId}.json`,
};
