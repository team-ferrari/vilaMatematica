import Logo from '@assets/logos/logo.png';
import { LogoImage } from '@components/elements/images/logo';
import { AuthModal } from '@components/modals/auth';
import { theme } from '@styles/index.style';
import React from 'react';
import { StatusBar, View } from 'react-native';


import { style } from './styles';


export function AuthTheme({ children }: any) {
  return (
    <View style={style.container}>
        <StatusBar
            barStyle={theme.BAR_STYLE}
            translucent
            backgroundColor={theme.BAR_BACKGROUND_COLOR} />
        <View style={style.logo}>
            <LogoImage source={Logo} />
        </View>
        {children}
        <AuthModal />
    </View>
  );
}
