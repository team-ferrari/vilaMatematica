import { ButtonPrimary } from '@components/elements/buttons/primary';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { style } from './styles';

export function NewAdventure({ initAction }:any) {
    const { t } = useTranslation();

    return (
        <View style={style.container}>
            <TitleText value={t('adventure.newTitle')} styled={Styles.DarkH1Centered} />
            <TitleText value={t('adventure.newSubtitle')} styled={Styles.DarkH2Centered} />

            <View style={style.actions}>
                <ButtonPrimary title={t('actions.start')} action={initAction} />
            </View>
        </View>
    );
}
