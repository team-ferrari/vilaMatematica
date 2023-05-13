import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        maxWidth: 200,
    },
    breadcrumb: {
        marginTop: 10,
    },
    body: {
        marginVertical: 20,
        backgroundColor: theme.PALLETE01_COLOR,
        padding: 20,
        borderRadius: 5,
    },
});
