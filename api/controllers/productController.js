const axios = require("axios");
const route = require("../../config/endpoints")
const meta = require('./helper')


class Products {
  constructor(product) {
    this.product = product
  }
  async getProducts() {
    await axios(route.allProducts)
      .then((res) => {
        meta.getCreatedByDate(res)
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }

  /**
   * Retrieve list of products
   * Retrieve a count of products
   * Retrieve a single product
   * Create a new product
   * Updates a product
   * Delete a product
   */
}

module.exports = Products