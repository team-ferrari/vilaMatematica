
import SideMenuNavigation from '@components/navigation/sidemenu';
import { RouteOptions } from '@interfaces/routes/RoutesOptions';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthScreens } from '@routes/screens/auth.screens';
import { MainScreens } from '@routes/screens/main.screens';
import React from 'react';

import { ActivityScreens } from './screens/actitivity.screens';
import { styles } from './styles.routes';

const { Navigator, Screen } = createDrawerNavigator();

export function Routes() {
    function getSideMenu(props:any) {
        return (<SideMenuNavigation {...props} />);
    }

    return (
        <Navigator initialRouteName={RouteOptions.main} screenOptions={styles.drawerScreenOptions} drawerContent={props => getSideMenu(props)}>
            <Screen name={RouteOptions.main} component={MainScreens} options={styles.screenOptions} />
            <Screen name={RouteOptions.auth} component={AuthScreens} options={styles.screenOptions} />
            <Screen name={RouteOptions.activities} component={ActivityScreens} options={styles.screenOptions} />
        </Navigator>
    );
}
