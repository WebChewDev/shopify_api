const axios = require("axios");
const route = require("../../config/endpoints")



class Products {
  constructor(product) {
    this.product = product
  }
  async getProducts() {
    await axios({
        method: "get",
        url: route.allProducts,
      })
      .then((res) => {
        const data = res.data

        let dates = []

        data.products.forEach(product => {
          const parsedTime = Date.parse(product.created_at)
          dates.push(parsedTime)
        })

        const latestDate = Math.max.apply(Math, dates)

        console.log(latestDate)
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