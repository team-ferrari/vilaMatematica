import { createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityScreen } from '@screens/activity';
import { ActivityFinishedScreen } from '@screens/activityFinished';
import { PATH_ACTIVITY, PATH_ACTIVITY_FINISHED } from '@services/navigation';
import { ActionTheme } from '@themes/Action';
import React from 'react';

import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function ActivityScreens() {
    return (
        <ActionTheme>
            <Navigator
                initialRouteName={PATH_ACTIVITY_FINISHED}
                screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_ACTIVITY} component={ActivityScreen} />
                <Screen name={PATH_ACTIVITY_FINISHED} component={ActivityFinishedScreen} />
            </Navigator>
        </ActionTheme>
    );
}
