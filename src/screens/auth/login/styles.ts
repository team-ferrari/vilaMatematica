import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        backgroundColor: theme.LIGHT_COLOR,
        margin: '5%',
        padding: 10,
    },
    items: {
    },
    item: {
        padding: 10,
    },
    text: {
        paddingVertical: 5,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footer: {
        backgroundColor: theme.PALLETE01_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerOption: {
        paddingHorizontal: 10,
    },
});
