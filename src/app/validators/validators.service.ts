export class ValidatorsService {
static getValidationMessage(validator: string, validatorValue?: any) {
  const messages = {
    required: 'This field is required',
    min: `Minimum value is ${validatorValue.min} `,
    max: `Maximum value is ${validatorValue.max}`,
    numeric: 'This field must be a number',
    pattern: 'This field must be a URL address'
  };
  return messages[validator];
}
}
