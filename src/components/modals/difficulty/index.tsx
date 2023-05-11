
import { ButtonPrimary } from '@components/elements/buttons/primary';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Modal } from 'react-native-paper';

import { style } from './styles';

export function DifficultyModal({ modal, dismissAction }:any) {
    const { t } = useTranslation();
    const difficulties = [
        {
            id: 1,
            title: 'Faćil',
        },
        {
            id: 2,
            title: 'Médio',
        },
        {
            id: 3,
            title: 'Difícil',
        },
    ];

    return (
        <Modal visible={modal} style={style.container} onDismiss={dismissAction}>
            <View style={style.modal}>
                <TitleText value={t('difficulty.title')} styled={Styles.DarkH2Centered} />

                <View style={style.action}>
                    {difficulties.map((d, i) => (
                        <View style={style.button} key={i}>
                            <ButtonPrimary title={d.title} />
                        </View>
                    ))}
                </View>
            </View>
        </Modal>
    );
}
