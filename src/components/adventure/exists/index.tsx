import CatSneaking from '@assets/animations/cat-sneaking.json';
import {ButtonPrimary} from '@components/elements/buttons/primary';
import {TitleText} from '@components/elements/texts/title';
import {Styles} from '@interfaces/texts/TextProps';
import LottieView from 'lottie-react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {style} from './styles';

export function ExistingAdventure({ initAction }:any) {
  const {t} = useTranslation();
  const animalsRecued = 10;
  const recuedMessage = `${t('adventure.rescued')} ${animalsRecued} ${t(
    'adventure.animals',
  )}`;

  return (
    <View style={style.container}>
      <View style={style.body}>
        <LottieView
          source={CatSneaking}
          style={style.animations}
          autoPlay
          loop
        />
        <TitleText value={recuedMessage} styled={Styles.DarkH1Centered} />
        <TitleText
          value={t('adventure.newSubtitle')}
          styled={Styles.DarkH2Centered}
        />
      </View>

      <TitleText
        value={t('adventure.newTitle')}
        styled={Styles.DarkH1Centered}
      />
      <View style={style.actions}>
        <ButtonPrimary title={t('actions.start')} action={initAction} />
      </View>
    </View>
  );
}
