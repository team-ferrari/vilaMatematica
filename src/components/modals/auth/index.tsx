import React from 'react';
import { View } from 'react-native';
import { Modal } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { TitleText } from '@components/elements/texts/title';
import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { ALERTTYPE_ERROR } from '@constants/alertType';
import { Styles } from '@interfaces/texts/TextProps';
import { RootState } from '@store/modules/rootReducer';
import { failedCheckedAction } from '@store/modules/auth/actions';

import { style } from './styles';

export function AuthModal() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { alert } = useSelector((state:RootState) => state.auth);

    if (!alert) {return <></>;}

    function closeHandler() {
        dispatch(failedCheckedAction());
    }

    const message = t(alert.message);
    const title = alert.type === ALERTTYPE_ERROR ?
        t('auth.actionInvalid') :
        t('auth.actionWarning');
    return (
        <Modal visible={alert.active} style={style.container} onDismiss={closeHandler}>
            <View style={style.modal}>
                <TitleText value={title} styled={Styles.DarkH2Centered} />

                <View style={style.content}>
                    <TitleText value={message} styled={Styles.DarkH3Centered} />
                </View>

                <View style={style.action}>
                    <ButtonSecondary title={t('auth.ok')} action={closeHandler} />
                </View>
            </View>
        </Modal>
    );
}
