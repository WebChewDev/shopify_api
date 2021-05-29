// TODO: turn this template into a form for the user to update metafields

module.exports = mfTemplate = (
  namespace,
  key,
  value,
  valueType,
  description
) => {
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
