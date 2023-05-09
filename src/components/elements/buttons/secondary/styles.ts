import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.GRAY_COLOR,
        borderRadius: 5,
    },
    textArea: {
        padding: 5,
    },
});
