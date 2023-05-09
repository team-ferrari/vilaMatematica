import * as Yup from 'yup';

export const initialValues = {
    name: '',
    description: '',
    frequency: '',
    visibility: 'public',
};

export const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  description: Yup.string().required('A descrição é obrigatoria'),
});
