
import { GoogleAuthentication } from '@components/authentication/google';
import { ButtonPrimary } from '@components/elements/buttons/primary';
import { PasswordInput } from '@components/elements/inputs/passwords';
import { ValueInput } from '@components/elements/inputs/values';
import { ErrorText } from '@components/elements/texts/error';
import { InfoText } from '@components/elements/texts/info';
import { LinkedText } from '@components/elements/texts/linked';
import { SignInProps } from '@interfaces/account/SignInProps';
import { Styles } from '@interfaces/elements/inputs/ValueProps';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { Styles as LinkedTextStyles } from '@interfaces/texts/LinkedTextProps';
import { PATH_FORGOTPASSWORD, PATH_SIGNUP } from '@services/navigation';
import { initialValues, schema } from '@services/validation/signIn.schema';
import { signInAction } from '@store/modules/auth/actions';
import { navigateAction } from '@store/modules/navigate/actions';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';


import { style } from './styles';

export function Login() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function onSubmit({ user, password }:SignInProps) {
    dispatch(signInAction({ user, password }));
  }

  function forgotPasswordHandler() {
    dispatch(navigateAction({ path: RouteOptions.auth, screen: PATH_FORGOTPASSWORD }));
  }

  function signUPHandler() {
    dispatch(navigateAction({ path: RouteOptions.auth, screen: PATH_SIGNUP }));
  }

  return (
    <>
        <View style={style.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={schema}>
                {({ handleSubmit, handleChange, values, errors }) => (
                    <View style={style.items}>
                        <View style={style.item}>
                            <View style={style.text}>
                                <InfoText value={t('fields.user')} />
                            </View>
                            <ValueInput
                                value={values.user}
                                placeholder={t('fields.userPlaceholder')}
                                onChangeText={handleChange('user')}
                                styled={Styles.DarkSmallBorder} />
                            <View style={style.text}>
                                <ErrorText value={errors.user} />
                            </View>
                        </View>
                        <View style={style.item}>
                            <View style={style.text}>
                                <InfoText value={t('fields.password')} />
                            </View>
                            <PasswordInput
                                value={values.password}
                                placeholder={t('fields.passwordPlaceholder')}
                                onChangeText={handleChange('password')}
                                styled={Styles.DarkSmallBorder} />
                            <View style={style.text}>
                                <ErrorText value={errors.password} />
                            </View>
                        </View>
                        <View style={[style.item, style.action]}>
                            <LinkedText value={t('auth.forgotPassword')} styled={LinkedTextStyles.DarkH3} action={forgotPasswordHandler} />
                        </View>
                        <View style={style.item}>
                            <GoogleAuthentication />
                        </View>
                        <View style={style.item}>
                            <ButtonPrimary title={t('auth.enter')} action={handleSubmit} />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
        <View style={style.footer}>
            <InfoText value={t('auth.withoutAccount')} />
            <View style={style.footerOption}>
                <LinkedText value={t('auth.createNow')} styled={LinkedTextStyles.DarkH3Blue} action={signUPHandler} />
            </View>
        </View>
    </>
  );
}
