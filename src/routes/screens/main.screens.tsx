import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutUs } from '@screens/aboutUs';
import { Animals } from '@screens/animals';
import { Home } from '@screens/home';
import { PrivacyPolicy } from '@screens/privacyPolicy';
import { PATH_ABOUTUS, PATH_ANIMALS, PATH_HOME, PATH_PRIVACYPOLICY } from '@services/navigation';
import { MainTheme } from '@themes/Main';
import React from 'react';

import { styles } from '../styles.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function MainScreens() {
    return (
        <MainTheme>
            <Navigator
                initialRouteName={PATH_HOME}
                screenOptions={styles.drawerScreenOptions}>
                <Screen name={PATH_HOME} component={Home} />
                <Screen name={PATH_ANIMALS} component={Animals} />
                <Screen name={PATH_ABOUTUS} component={AboutUs} />
                <Screen name={PATH_PRIVACYPOLICY} component={PrivacyPolicy} />
            </Navigator>
        </MainTheme>
    );
}
