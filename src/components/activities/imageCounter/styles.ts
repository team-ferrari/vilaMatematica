import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
    },
    header: {
        paddingVertical: 0,
    },
    body: {
        paddingHorizontal: 20,
    },
    images: {
        flexDirection: 'row',
        paddingVertical: 0,
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
