
import { ButtonAction } from '@components/elements/buttons/action';
import { TitleText } from '@components/elements/texts/title';
import { getColorPallete } from '@helpers/DifficultyHelper';
import { Styles } from '@interfaces/texts/TextProps';
import { RootState } from '@store/modules/rootReducer';
import { createAction } from '@store/modules/session/actions';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { style } from './styles';

export function DifficultyModal({ modal, dismissAction }:any) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { options } = useSelector((state:RootState) => state.difficulties);

    if (!options) {return <></>;}

    function getName(name:string) {
        return t(`difficulty.${name}`);
    }

    function selectOptionHandler(difficulty:string) {
        dispatch(createAction({ difficulty }));
    }

    return (
        <Modal visible={modal} style={style.container} onDismiss={dismissAction}>
            <View style={style.modal}>
                <TitleText value={t('difficulty.title')} styled={Styles.DarkH2Centered} />

                <View style={style.action}>
                    {options.map((d, i) => (
                        <TouchableOpacity style={style.button} key={i} onPress={() => { selectOptionHandler(d); }}>
                            <ButtonAction title={getName(d)} pallete={getColorPallete(d)} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );
}
