import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  numerals: {
    display:'flex-start',
    flex:3,
    marginLeft:20,
    marginRight:20,
    flexDirection: 'row',
    justifyContent:'space-evenly'

  },
  Headline: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:5,
    paddingLeft:5
  },
  decription: {
    fontSize: 18,
    padding:5

  },
  language:{
    alignSelf:'flex-start',
    backgroundColor: '#0366d6',
    color:"#e1e8e3",
    fontSize: 20,
    padding:5,
    fontWeight:'bold'
  }
};

export default theme;