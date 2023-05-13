import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { FingerImages } from '../fingerImages';
import { OptionsList } from '../optionsList';

import {style} from './styles';

export function Fingers({ session }:any) {
  const { t } = useTranslation();

  if (!session) {return <></>;}

  function selectedOption(data:any) {
    console.log(data);
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TitleText value={t('activities.correctAnswer.title')} styled={Styles.DarkH1Centered} />
      </View>
      <View style={style.body}>
        <TitleText value={t('activities.fingers.title')} styled={Styles.DarkH1Centered} />
        <FingerImages details={session.details} />
      </View>
      <OptionsList details={session.details} action={selectedOption} />
    </View>
  );
}
