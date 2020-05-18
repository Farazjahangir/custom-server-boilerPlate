const globalHelpers = {};

globalHelpers.handleMoongooseValidation = function (err) {
  let errors = [];
  if (err.name === "ValidationError") {
    for (let key in err.errors) {
      errors.push(err.errors[key].message);
    }
  }

  if (Array.isArray(err)) {
    errors = err;
  }

  if (typeof err.message === 'string' && err.name !== "ValidationError") {
    errors = err.message 
  }

  return errors;
};

module.exports = globalHelpers;
