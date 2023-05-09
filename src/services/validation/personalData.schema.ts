import * as Yup from 'yup';

export const initialValues = {
    name: '',
    email: '',
    createdAt: '',
};

export const schema = Yup.object().shape({
  name: Yup.string().required('Informe o seu nome'),
  email: Yup.string().required('Informe o seu e-mail'),
  createdAt: Yup.string(),
});
