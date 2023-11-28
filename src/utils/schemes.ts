import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^[A-Z]/, 'Must contain first uppercased letter'),
  email: yup
    .string()
    .required('Email is a required field')
    .matches(/@[^.]*\./, 'Must be email'),
  password: yup
    .string()
    .required('Password is a required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  confirmPassword: yup
    .string()
    .required('Password is a required field')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .positive('Age must be greater than zero')
    .required('Age is a required field'),
  gender: yup.string().required('Gender is a required field'),
  country: yup.string().required('Country is a required field'),
  image: yup.string().required('Image is a required field'),
  tandc: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required(),
});
