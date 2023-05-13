import { TitleText } from '@components/elements/texts/title';
import { getOperator } from '@helpers/OperatorHelper';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { OptionsList } from '../optionsList';

import {style} from './styles';

export function CorrectAnswer({ session }:any) {
  const { t } = useTranslation();
  const { details } = session;

  if (!details) {return <></>;}

  const question = `${details?.firstValue} ${getOperator(details?.operation)} ${details?.secondValue}`;

  function selectedOption(data:any) {
    console.log(data);
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TitleText value={t('activities.correctAnswer.title')} styled={Styles.DarkH1Centered} />
      </View>
      <View style={style.body}>
        <TitleText value={t('activities.correctAnswer.howMuchIs')} styled={Styles.DarkH1Centered} />
        <TitleText value={question} styled={Styles.DarkHighH1Centered} />
      </View>
      <OptionsList details={session.details} action={selectedOption} />
    </View>
  );
}
