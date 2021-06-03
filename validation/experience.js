const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateExperienceInput(data) {
  const errors = {};
//validating for imp fields title company nme and from date
  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

if (Validator.isEmpty(data.title)) {
    errors.title = 'title field is required';
  }
if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }
if (Validator.isEmpty(data.from)) {
    errors.from = 'From date  is required';
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
