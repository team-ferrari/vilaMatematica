import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { PATH_LOGIN } from '@services/navigation';
import { Login } from '@screens/auth/login';
import { AuthTheme } from '@themes/Auth';

import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function AuthScreens() {
    return (
        <AuthTheme>
            <Navigator
                initialRouteName={PATH_LOGIN}
                screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_LOGIN} component={Login} />
            </Navigator>
        </AuthTheme>
    );
}
