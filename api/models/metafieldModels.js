// TODO: turn this template into a form for the user to update metafields

module.exports = (
    namespace,
    key,
    value,
    value_type,
  
  ) => {
    return {
      metafield: {
        namespace,
        key,
        value,
        value_type,
      },
    };
  };