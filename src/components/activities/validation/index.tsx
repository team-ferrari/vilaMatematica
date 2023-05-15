import correct from '@assets/animations/correct.json';
import error from '@assets/animations/error.json';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import LottieView from 'lottie-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {View} from 'react-native';

import {style} from './styles';

export function ValidationActivies({ isCorrect }:any) {
  const { t } = useTranslation();
  const animation = isCorrect ? correct : error;
  const message = isCorrect ?
    t('activities.congratsCorrect') :
    t('activities.wrongAnswer');

  return (
    <View style={style.container}>
      <LottieView
        source={animation}
        style={style.animations}
        autoPlay
        loop
      />
      <TitleText value={message} styled={Styles.DarkH2Centered} />
    </View>
  );
}
