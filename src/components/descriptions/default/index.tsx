import React from 'react';
import { View } from 'react-native';
import { ParagraphText } from '@components/elements/texts/paragraph';
import { DescriptionDefaultProps } from '@interfaces/components/descriptions/DescriptionDefaultProps';

export function DefaultDescription({ content }:DescriptionDefaultProps) {
    const lines = content ? content.split('|') : null;

    if (!lines) {return <></>;}

    return (
        <View>
            {lines.map((s:string, i:number) => (<ParagraphText key={i} value={s} />))}
        </View>
    );
}
