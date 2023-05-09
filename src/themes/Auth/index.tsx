import React from 'react';
import { StatusBar, View } from 'react-native';

import Logo from '@assets/logos/logo.png';
import Background from '@assets/logos/background.png';
import { LogoImage } from '@components/elements/images/logo';

import { style } from './styles';
import { theme } from '@styles/index.style';
import { BackgroundImage } from '@components/elements/images/background';
import { AuthModal } from '@components/modals/auth';

export function AuthTheme({ children }: any) {
  return (
    <View style={style.container}>
        <StatusBar
            barStyle={theme.BAR_STYLE}
            translucent
            backgroundColor={theme.BAR_BACKGROUND_COLOR} />
        <BackgroundImage source={Background} />
        <View style={style.logo}>
            <LogoImage source={Logo} />
        </View>
        {children}
        <AuthModal />
    </View>
  );
}
