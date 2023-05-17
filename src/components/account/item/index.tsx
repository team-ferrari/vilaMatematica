import { Icon } from '@components/elements/images/Icon';
import { InfoText } from '@components/elements/texts/info';
import { ItemAccountProps } from '@interfaces/account/SignInProps';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { style } from './styles';

export function ItemAccount({ source, value, action }:ItemAccountProps) {
    return (
        <TouchableOpacity style={style.container} onPress={action}>
            <Icon source={source} />
            <View style={style.info}>
                <InfoText value={value} />
            </View>
        </TouchableOpacity>
    );
}
