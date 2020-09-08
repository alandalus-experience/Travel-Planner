import { useForm } from 'react-hook-form';


export const formValidators = {
  input: {
    email: {required: true, pattern: /^\S+@\S+$/i},
    password: {required: true, maxLength: 256, minLength: 8},
    passwordConfirm: (value, watch) => {return value === watch('Password')}
  }
}

