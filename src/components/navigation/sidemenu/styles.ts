import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerContent: {
        marginTop: -10,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 40,
      backgroundColor: theme.PALLETE03_COLOR,
      borderBottomRightRadius: 40,
    },
    items: {
      backgroundColor: theme.LIGHT_COLOR,
      paddingTop: 10,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
});
