import * as Yup from 'yup';

export const initialValues = {
    value: '',
};

export const schema = Yup.object().shape({
  value: Yup.string(),
});
