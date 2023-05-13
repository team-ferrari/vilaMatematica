import SideMenuNavigation from '@components/navigation/sidemenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityScreen } from '@screens/activity';
import { PATH_ACTIVITY } from '@services/navigation';
import { ActionTheme } from '@themes/Action';
import React from 'react';

import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function ActivityScreens() {
    function getSideMenu(props:any) {
        return (<SideMenuNavigation {...props} />);
    }

    return (
        <ActionTheme>
            <Navigator
                initialRouteName={PATH_ACTIVITY}
                screenOptions={styles.drawerScreenOptions}
                drawerContent={props => getSideMenu(props)}>
                <Screen name={PATH_ACTIVITY} component={ActivityScreen} />
            </Navigator>
        </ActionTheme>
    );
}
