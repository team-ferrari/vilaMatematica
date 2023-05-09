import React from 'react';
import { Text } from 'react-native';

import { Styles, TextProps } from '@interfaces/texts/TextProps';

import { getStyle } from './styles';

export function TitleText({ value, styled = Styles.Default }:TextProps) {
    const textStyle = getStyle(styled);

    return (
        <Text style={textStyle}>{ value }</Text>
    );
}
