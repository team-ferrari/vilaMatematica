import React from 'react';
import { View } from 'react-native';

import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';

import { style } from './styles';

export function MainTheme({ children }: PageWrapperProps) {
  return (
    <View style={style.container}>
        <View style={style.content}>
            {children}
        </View>
    </View>
  );
}
