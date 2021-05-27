const mfTemplate = (namespace, key, value, valueType, description) => {
  data = {
    metafield: {
      namespace,
      key,
      value,
      valueType,
      description,
    },
  };
  return data;
};

const sample_obj = mfTemplate(
  "toys",
  "sizes",
  "34cm",
  "string",
  "Meth filled toys for the crack babies"
);

module.exports = sample_obj;
