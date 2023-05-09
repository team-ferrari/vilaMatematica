import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  text: {
    fontSize: theme.FONT_SIZE_VENTI,
    fontFamily: theme.FONT_FAMILY,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});
