import * as Yup from 'yup';

const regex = {
  name: /^[a-z]*$/,
  email:
    /^(?!.@.@.$)(?!.@.--...$)(?!.@.-..$)(?!.@.-$)((.*)?@[a-z0-9]{1,}.[a-z]{2,}(.[a-z]{2,})?)$/,
  phone:
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
  skype: /^@[A-Za-z0-9_.-]{3,50}$/,
};

export const userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[^0-9]+$/, 'Name should contain only letters')
    .min(2, 'Must be at least 2 characters!')
    .max(16, 'Must be up to 16 characters!')
    .required('Name is required'),
  birthday: Yup.string('Please enter your full date of birth').required(
    'Birthday is required'
  ),
  email: Yup.string()
    .email('Invalid email format')
    .matches(regex.email, 'Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(regex.phone, 'Invalid phone number format')
    .min(6, 'At least 7 digits is required'),
    skype: Yup.string()
    .matches(regex.skype, 'Invalid skype username format')
    .max(50, 'At most 50 digits is required'),
  avatarURL: Yup.string()
});