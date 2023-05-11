
import ListIcon from '@assets/icons/list.svg';
import LogoIcon from '@assets/logos/logo.png';
import { Icon } from '@components/elements/images/Icon';
import { HeaderLogoImage } from '@components/elements/images/headerLogo';
import { Styles } from '@interfaces/images/IconProps';
import { theme } from '@styles/index.style';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { RescuedAnimals } from '../RescuedAnimals';

import { style } from './styles';

export function MenuHeader() {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.header}>
                <Icon source={ListIcon} styled={Styles.Large} fill={theme.LIGHT_COLOR}  />
            </TouchableOpacity>
            <View style={style.image}>
                <TouchableOpacity>
                    <HeaderLogoImage source={LogoIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.header}>
                <RescuedAnimals />
            </TouchableOpacity>
        </View>
    );
}
