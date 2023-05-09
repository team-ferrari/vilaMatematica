import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    modal: {
        minWidth: 350,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    action: {
        paddingHorizontal: 20,
    },
});
