import { Styles } from '@interfaces/texts/TextProps';
import { theme } from '@styles/index.style';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  default: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  pallete03Centered: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PALLETE03_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  darkH1Centered: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  darkH2Centered: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  darkH3: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  darkH3Centered: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  darkH3Enumerated: {
    backgroundColor: theme.PALLETE01_COLOR,
    borderRadius: 80,
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  darkH4: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
    paddingTop: 10,
    paddingBottom: 10,
  },
  lightH4Centered: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.LIGHT_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const getStyle = (type:Styles) => {
    if (type === Styles.Pallete03Centered) {return style.pallete03Centered;}
    if (type === Styles.DarkH1Centered) {return style.darkH1Centered;}
    if (type === Styles.DarkH2Centered) {return style.darkH2Centered;}
    if (type === Styles.DarkH3) {return style.darkH3;}
    if (type === Styles.DarkH3Centered) {return style.darkH3Centered;}
    if (type === Styles.DarkH3Enumerated) {return style.darkH3Enumerated;}
    if (type === Styles.DarkH4) {return style.darkH4;}
    if (type === Styles.LightH4Centered) {return style.lightH4Centered;}

    return style.default;
};