import * as yup from 'yup';

const validationsMessages = {
  requiredMessage: 'Required field.',
  onlyNumbers: 'Only numbers. Invalid format.',
};

const regexValidations = {
  onlyNumbers: /^\d+(\.\d{1,2})?$/,
};

const symbolSchema = yup.string().required(validationsMessages.requiredMessage);

const priceSchema = yup
  .string()
  .required(validationsMessages.requiredMessage)
  .matches(regexValidations.onlyNumbers, validationsMessages.onlyNumbers);

export const alertSchema = yup.object().shape({
  symbol: symbolSchema,
  alertPrice: priceSchema,
});
