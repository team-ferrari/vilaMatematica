import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';
import { theme } from '@styles/index.style';
import React from 'react';
import { StatusBar, View } from 'react-native';

import { style } from './styles';

export function ActionTheme({ children }: PageWrapperProps) {
  return (
    <View style={style.container}>
        <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor={theme.PALLETE03_COLOR}
        />
        <View style={style.content}>
          {children}
        </View>
    </View>
  );
}
