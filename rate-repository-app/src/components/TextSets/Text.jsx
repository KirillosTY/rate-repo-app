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
  description: {
    fontSize: theme.description.fontSize,
    padding: theme.description.padding,
    flexDirection:'column',
    flexGrow:1
    

  },
  language:{
    alignSelf:theme.language.alignSelf,
    backgroundColor: theme.language.backgroundColor,
    color: theme.language.color,
    fontSize: theme.language.fontSize,
    padding: theme.language.padding,
    fontWeight:theme.language.fontWeight,
    height:40
  }
});

const Text = ({ color, fontSize,fontFamily, fontWeight,type, style, ...props }) => {
  const textStyle = [
    styles.text,
    type === 'headline' && styles.headline,
    type === 'description' && styles.description,
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