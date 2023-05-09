import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { LinkedTextProps, Styles } from '@interfaces/texts/LinkedTextProps';

import { getStyle } from './styles';

export function LinkedText({ value, action, styled = Styles.Default }:LinkedTextProps) {
    const textStyle = getStyle(styled);

    if (!value) {
        return <></>;
    }

    return (
        <TouchableOpacity onPress={action}>
            <Text style={textStyle}>{ value }</Text>
        </TouchableOpacity>
    );
}
