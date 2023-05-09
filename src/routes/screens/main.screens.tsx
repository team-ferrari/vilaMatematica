import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { Home } from '@screens/home';
import { PATH_HOME } from '@services/navigation';
import { MainTheme } from '@themes/Main';

import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function MainScreens() {
    return (
        <MainTheme>
            <Navigator
                initialRouteName={PATH_HOME}
                screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_HOME} component={Home} />
            </Navigator>
        </MainTheme>
    );
}
