const axios = require("axios");

const {
  allMetafields,
  singleMetafield,
  updateMetafield,
  deleteMetafield,
} = require("../../config/endpoints");




class Metafield {
  constructor(product, metaId) {
    this.product = product;
    this.metaId = metaId;
  }
  //list a single products metafields
  async getMetafields() {
    await axios({
        method: "get",
        url: allMetafields(this.product),
      })
      .then((res) => {
        console.log(res.data.metafields);
      })
      .catch((err) => console.log(err));
  }

  //create a metafield on a single product
  async createMetafield(data) {
    await axios({
        method: "post",
        url: allMetafields(this.product),
        data: data,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  // update a single metafield
  async updateMetafield(data) {
    await axios({
        method: "put",
        url: updateMetafield(this.metaId),
        data: data,
      })
      .then((res) => console.log(res.data.metafields))
      .catch((err) => console.log(err));
  }

  //delete a single metafield from a product
  async deleteMetafield() {
    await axios({
        method: "delete",
        url: deleteMetafield(this.metaId),
      })
      .then((res) => console.log(res.data.metafields))
      .catch((err) => console.log(err));
  }

  log() {
    console.log(this.product);
  }
}

module.exports = Metafield;