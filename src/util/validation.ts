export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

/**
 * Determines if input is valid or not
 * @function
 * @param {Object} validatableInput - Input to be validated.
 * @param {string|number} validatableInput.value - Value of input.
 * @param {boolean=} validatableInput.required - Determines if value is required
 * @param {number} validatableInput.minLength - Minimum length of string validatableInput.value
 * @param {number} validatableInput.maxLength - Maximum length of string validatableInput.value
 * @param {number} validatableInput.min - Minimum length of number validatableInput.value
 * @param {number} validatableInput.max - Maximum length of number validatableInput.value
 * @returns {boolean} True for is valid, false for not valid
 */
export function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}
