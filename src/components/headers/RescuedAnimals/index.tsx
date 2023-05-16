import { SmallLogoImage } from '@components/elements/images/smallLogo';
import { TitleText } from '@components/elements/texts/title';
import { getMedalByCount } from '@helpers/MedalHelper';
import { Styles } from '@interfaces/texts/TextProps';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { style } from './styles';

export function RescuedAnimals() {
    const { t } = useTranslation();
    const { released }:any = useSelector((state:RootState) => state.animals);
    const animals = released || 0;
    const info = `${animals} ${t('adventure.animalsRecued')}`;
    const medal = getMedalByCount(animals);

    return (
        <View style={style.container}>
            <SmallLogoImage source={medal} />
            <TitleText value={info} styled={Styles.LightH4Centered} />
        </View>
    );
}
