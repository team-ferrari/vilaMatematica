import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from '@screens/auth/login';
import { PATH_LOGIN } from '@services/navigation';
import { AuthTheme } from '@themes/Auth';
import React from 'react';

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
