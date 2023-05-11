import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.PALLETE03_COLOR,
    },
    header: {
        paddingBottom: 5,
    },
    image: {
        display: 'flex',
        alignItems: 'center',
    },
});
