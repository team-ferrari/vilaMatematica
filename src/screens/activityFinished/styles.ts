import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.PALLETE04_COLOR,
        flex: 1,
    },
    header: {
        maxWidth: 200,
    },
    breadcrumb: {
        marginTop: 10,
    },
    body: {
        marginVertical: 10,
        backgroundColor: theme.LIGHT_COLOR,
        padding: 20,
        borderRadius: 5,
    },
});
