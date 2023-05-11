import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';

import { style } from './styles';

export default function SideMenuNavigation() {
  return (
    <View style={style.container}>
      <DrawerContentScrollView
        contentContainerStyle={style.drawerContent}>
        <View style={style.header} />
        <View style={style.items} />
      </DrawerContentScrollView>
    </View>
  );
}
