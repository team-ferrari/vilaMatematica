import * as Yup from 'yup';

export const initialValues = {
    user: '',
};

export const schema = Yup.object().shape({
    user: Yup.string().required('O usuário é obrigatorio').email('Insira um e-mail válido'),
});
