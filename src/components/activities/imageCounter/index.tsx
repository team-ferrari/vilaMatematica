import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import { selectOptionAction } from '@store/modules/session/actions';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View} from 'react-native';
import { useDispatch } from 'react-redux';

import { AnimalImages } from '../animalImages';
import { OptionsList } from '../optionsList';

import {style} from './styles';

export function ImageCounter({ session }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (!session) { return <></>;}

  const imageCounter = `${t('activities.imageCounter.howMuch')} ${t(`activities.animals.${session.details.animal}`)} ${t('activities.imageCounter.above')}`;

  function selectedOption(option:any) {
    dispatch(selectOptionAction({ option }));
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TitleText value={t('activities.correctAnswer.title')} styled={Styles.DarkH1Centered} />
      </View>
      <View style={style.body}>
        <TitleText value={imageCounter} styled={Styles.DarkH1Centered} />
        <AnimalImages details={session.details} />
      </View>
      <OptionsList details={session.details} action={selectedOption} />
    </View>
  );
}
