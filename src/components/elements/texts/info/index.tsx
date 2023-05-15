import { TextProps } from '@interfaces/texts/TextProps';
import React from 'react';
import { Text } from 'react-native';

import { style } from './styles';

export function InfoText({ value, theme = 'dark' }:TextProps) {
    const textStyle = theme === 'dark' ? style.dark : style.light;

    if (!value) {
        return <></>;
    }

    return (
        <Text style={textStyle}>{ value }</Text>
    );
}
