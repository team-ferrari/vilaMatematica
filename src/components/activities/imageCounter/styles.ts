import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    header: {
        paddingVertical: 30,
    },
    body: {
        paddingVertical: 10,
    },
    images: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    image: {
        flex: 1,
        aspectRatio: 1,
    },
    actions: {
    },
    action: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    box: {
        borderRadius: 10,
        backgroundColor: theme.PALLETE03_COLOR,
        paddingVertical: 10,
    },
});
