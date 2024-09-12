import { NAME_REGEX, ZIP_CODE_REGEX } from '@helpers/regex'

const INVALID_MESSAGE = "Invalid format";
const REQUIRED_MESSAGE = "This field is required";
const STATE_DEFAULT_TEXT = "Select a state";
const DEFAULT_TEXT = "Select a department";

export function ValidateFormat(formValues) {
  
  const formatErrors = {};

  if (formValues.firstName && !NAME_REGEX.test(formValues.firstName)) {
    formatErrors.firstName = INVALID_MESSAGE;
  }
  if (formValues.lastName && !NAME_REGEX.test(formValues.lastName)) {
    formatErrors.lastName = INVALID_MESSAGE;
  }
  if (formValues.city && !NAME_REGEX.test(formValues.city)) {
    formatErrors.city = INVALID_MESSAGE;
  }
  if (formValues.zipCode && !ZIP_CODE_REGEX.test(formValues.zipCode)) {
    formatErrors.zipCode = INVALID_MESSAGE;
  }
  return formatErrors;
}

export function ValidateRequiredFields(formValues) {

  const requiredErrors = {};

  if (!formValues.firstName) requiredErrors.firstName = REQUIRED_MESSAGE;
  if (!formValues.lastName) requiredErrors.lastName = REQUIRED_MESSAGE;
  if (!formValues.dob) requiredErrors.dob = REQUIRED_MESSAGE;
  if (!formValues.startDate) requiredErrors.startDate = REQUIRED_MESSAGE;
  if (!formValues.street) requiredErrors.street = REQUIRED_MESSAGE;
  if (!formValues.city) requiredErrors.city = REQUIRED_MESSAGE;
  if (formValues.state === STATE_DEFAULT_TEXT) requiredErrors.state = REQUIRED_MESSAGE;
  if (!formValues.zipCode) requiredErrors.zipCode = REQUIRED_MESSAGE;
  if (formValues.department === DEFAULT_TEXT) requiredErrors.department = REQUIRED_MESSAGE;

  return requiredErrors;
}

export function formValidation(formValues) {
  const formatErrors = ValidateFormat(formValues);
  const requiredErrors = ValidateRequiredFields(formValues);

  return {
    ...formatErrors,
    ...requiredErrors,
  };
}