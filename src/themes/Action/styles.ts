import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: theme.INITIAL_BORDER,
      backgroundColor: theme.LIGHT_COLOR,
    },
    content: {
        flex: 1,
    },
    footer: {
        height: 70,
        backgroundColor: theme.PALLETE03_COLOR,
    },
});
