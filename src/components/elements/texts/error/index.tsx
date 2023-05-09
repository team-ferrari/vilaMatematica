import React from 'react';
import { Text } from 'react-native';

import { TextProps } from '@interfaces/texts/TextProps';

import { style } from './styles';

export function ErrorText({ value, theme = 'dark' }:TextProps) {
    const textStyle = theme === 'dark' ? style.dark : style.light;

    if (!value) {
        return <></>;
    }

    return (
        <Text style={textStyle}>{ value }</Text>
    );
}
