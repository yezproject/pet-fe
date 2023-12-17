import * as yup from 'yup';

const loginValidator = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must not exceed 30 characters')
    .matches(/^[a-zA-Z0-9$@!%*?&#^-_. +]+$/, 'Password without accents'),
});

const joinValidator = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must not exceed 30 characters')
    .matches(/^[a-zA-Z0-9$@!%*?&#^-_. +]+$/, 'Password without accents'),
  region: yup.string().required('Region is required').notOneOf([''], 'Please select a valid region'),
});

export { loginValidator, joinValidator };