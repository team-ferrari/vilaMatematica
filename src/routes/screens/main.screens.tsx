import SideMenuNavigation from '@components/navigation/sidemenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Animals } from '@screens/animals';
import { Home } from '@screens/home';
import { PATH_ANIMALS, PATH_HOME } from '@services/navigation';
import { MainTheme } from '@themes/Main';
import React from 'react';

import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function MainScreens() {
    function getSideMenu(props:any) {
        return (<SideMenuNavigation {...props} />);
    }

    return (
        <MainTheme>
            <Navigator
                initialRouteName={PATH_ANIMALS}
                screenOptions={styles.drawerScreenOptions}
                drawerContent={props => getSideMenu(props)}>
                <Screen name={PATH_HOME} component={Home} />
                <Screen name={PATH_ANIMALS} component={Animals} />
            </Navigator>
        </MainTheme>
    );
}
