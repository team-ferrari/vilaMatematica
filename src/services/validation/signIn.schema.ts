import * as Yup from 'yup';

export const initialValues = {
    user: '',
    password: '',
};

export const schema = Yup.object().shape({
  user: Yup.string().required('O usuário é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});
