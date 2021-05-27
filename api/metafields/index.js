const axios = require("axios");
const sample_obj = require("./templates");

const {
  allMetafields,
  singleMetafield,
  updateMetafield,
} = require("../../config/routes");

// console.log(sample_obj)

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
  async createMetafield() {
    await axios({
      method: "post",
      url: allMetafields(this.product),
      data: sample_obj,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  // update a single metafield
  async updateMetafield() {
    await axios({
      method: "put",
      url: singleMetafield(this.product, this.metaId),
      data: updateField,
    })
      .then((res) => console.log(res.data.metafields))
      .catch((err) => console.log(err));
  }

  //delete a single metafield from a product
  async deleteMetafield() {
    await axios({
      method: "delete",
      url: singleMetafield(this.product, this.metaId),
    })
      .then((res) => console.log(res.data.metafields))
      .catch((err) => console.log(err));
  }

  log() {
    console.log(this.product);
  }
}

module.exports = Metafield;
