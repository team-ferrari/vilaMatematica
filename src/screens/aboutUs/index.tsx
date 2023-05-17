import { DefaultDescription } from '@components/descriptions/default';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';


import { style } from './styles';

export function AboutUs() {
  const { t } = useTranslation();

  return (
    <ScrollView>
        <View style={style.header}>
            <TitleText value={t('about.title')} styled={Styles.DarkH1Centered} />
        </View>
        <View style={style.info}>
            <DefaultDescription content={t('about.content')} />
        </View>
    </ScrollView>
  );
}
