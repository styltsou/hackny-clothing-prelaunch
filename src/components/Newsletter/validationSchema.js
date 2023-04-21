import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Please provide an email address'),
});

export default schema;
