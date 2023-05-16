import SadFace from '@assets/animations/sad-face.json';
import { ButtonPrimary } from '@components/elements/buttons/primary';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import { abortAction } from '@store/modules/session/actions';
import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { style } from './styles';

export function FailedSession({ percentual }:any) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const message = t('session.failed.message').replace('X', percentual.toString());

    function tryAgainAction() {
        dispatch(abortAction());
    }

    return (
        <View style={style.container}>
            <LottieView
                source={SadFace}
                style={style.animations}
                autoPlay
                loop
            />
            <TitleText value={message} styled={Styles.DarkH1Centered} />
            <ButtonPrimary title={t('session.failed.tryAgain')} action={tryAgainAction} />
        </View>
    );
}
