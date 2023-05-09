import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { MainScreens } from '@routes/screens/main.screens';

import { styles } from './styles.routes';

const { Navigator, Screen } = createDrawerNavigator();

export function Routes() {
    return (
        <Navigator initialRouteName={RouteOptions.main} screenOptions={styles.drawerScreenOptions}>
            <Screen name={RouteOptions.main} component={MainScreens} options={styles.screenOptions} />
        </Navigator>
    );
}
