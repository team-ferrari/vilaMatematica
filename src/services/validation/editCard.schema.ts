import * as Yup from 'yup';

export const initialValues = {
    title: '',
    content: '',
    secretContent: '',
};

export const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatorio'),
  content: Yup.string().required('O conteúdo é obrigatorio'),
  secretContent: Yup.string().required('A resposta é obrigatoria'),
});
