import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    shadow: {
        elevation: 6,
        shadowColor: '#333',
        shadowOffset: {
            width: -6,
            height: 2,
        },
        borderRadius: 10,
        padding: 20,
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
    },
});
