import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: theme.INITIAL_BORDER,
      backgroundColor: theme.PALLETE01_COLOR,
    },
    logo: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    children: {
    },
});
