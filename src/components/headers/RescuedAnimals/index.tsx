import Logo from '@assets/images/bronzeMedal.png';
import { SmallLogoImage } from '@components/elements/images/smallLogo';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { style } from './styles';

export function RescuedAnimals() {
    const { t } = useTranslation();
    const animals = 10;
    const info = `${animals} ${t('adventure.animalsRecued')}`;

    return (
        <View style={style.container}>
            <SmallLogoImage source={Logo} />
            <TitleText value={info} styled={Styles.LightH4Centered} />
        </View>
    );
}
