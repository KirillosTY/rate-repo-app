import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../../styles/theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  headline: {
    fontSize: theme.Headline.fontSize,
    fontWeight: theme.Headline.fontWeight,
    paddingBottom:theme.Headline.paddingBottom,
    paddingLeft:theme.Headline.paddingLeft 
  },
  decription: {
    fontSize: theme.decription.fontSize,
    padding: theme.decription.padding

  },
  language:{
    alignSelf:theme.language.alignSelf,
    backgroundColor: theme.language.backgroundColor,
    color: theme.language.color,
    fontSize: theme.language.fontSize,
    padding: theme.language.padding,
    fontWeight:theme.language.fontWeight
  }
});

const Text = ({ color, fontSize,fontFamily, fontWeight,type, style, ...props }) => {
  const textStyle = [
    type === 'headline' && styles.headline,
    type === 'description' && styles.decription,
    type === 'language' && styles.language,
    type === '' && styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;