import React from 'react';
import { View } from 'react-native';
import { Modal } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { TitleText } from '@components/elements/texts/title';
import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { Styles } from '@interfaces/texts/TextProps';
import { RootState } from '@store/modules/rootReducer';
import { checkAction } from '@store/modules/connection/actions';

import { style } from './styles';

export function ConnectionErrorModal() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { failed } = useSelector((state:RootState) => state.connection);

    function acceptHandler() {
        dispatch(checkAction({ failed: false }));
    }

    return (
        <Modal visible={failed} style={style.container} onDismiss={acceptHandler}>
            <View style={style.modal}>
                <TitleText value={t('errors.connectionError')} styled={Styles.DarkH2Centered} />
                <TitleText value={t('errors.connectionErrorDetails')} styled={Styles.DarkH3Centered} />

                <View style={style.action}>
                    <ButtonSecondary title={t('actions.ok')} action={acceptHandler} />
                </View>
            </View>
        </Modal>
    );
}
