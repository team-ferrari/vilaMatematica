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
        paddingHorizontal: 20,
    },
    action: {
        paddingVertical: 10,
    },
    animations: {
      aspectRatio: 1,
      width: 300,
    },
});
