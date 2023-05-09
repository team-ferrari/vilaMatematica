import React from 'react';
import { Text } from 'react-native';

import { TextProps } from '@interfaces/texts/TextProps';

import { style } from './styles';

export function ParagraphText({ value }:TextProps) {
    return (
        <Text style={style.text}>{ value }</Text>
    );
}
