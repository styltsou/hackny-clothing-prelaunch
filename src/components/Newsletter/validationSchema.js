import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export default schema;
