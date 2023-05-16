import SadFace from '@assets/animations/sad-face.json';
import { ButtonPrimary } from '@components/elements/buttons/primary';
import { TitleText } from '@components/elements/texts/title';
import { getAnimalByName } from '@helpers/AnimationHelper';
import { Styles } from '@interfaces/texts/TextProps';
import { RootState } from '@store/modules/rootReducer';
import { abortAction } from '@store/modules/session/actions';
import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { style } from './styles';

export function SuccessSession() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { lastUnlocked }:any = useSelector((state:RootState) => state.animals);
    const message = t('session.success.title').replace('{animal}', t(`activities.singleAnimals.${lastUnlocked}`));
    const animal = getAnimalByName(lastUnlocked);

    function tryAgainAction() {
        dispatch(abortAction());
    }

    return (
        <View style={style.container}>
            <LottieView
                source={animal}
                style={style.animations}
                autoPlay
                loop
            />
            <TitleText value={message} styled={Styles.DarkH1Centered} />
            <ButtonPrimary title={t('session.success.back')} action={tryAgainAction} />
        </View>
    );
}
