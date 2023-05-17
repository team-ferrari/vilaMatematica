import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import SignOutIcon from '@assets/icons/signout.svg';
import { InfoText } from '@components/elements/texts/info';
import { Icon } from '@components/elements/images/Icon';

import { style } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/modules/rootReducer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOutAction } from '@store/modules/auth/actions';

export function MenuAccount() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { name } = useSelector((state:RootState) => state.auth);
    const accountOf = `${t('account.ownerOf')} ${name}`;

    function logoutAction() {
        dispatch(signOutAction());
    }

    return (
        <TouchableOpacity onPress={logoutAction}>
            <View style={style.container}>
                <View style={[style.item, style.shadow]}>
                    <InfoText value={accountOf} />
                    <Icon source={SignOutIcon} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
