import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  dark: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  light: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.LIGHT_COLOR,
  },
});
