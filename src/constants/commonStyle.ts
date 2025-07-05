import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {fontsSize} from '../theme/typography';

export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontsSize.medium,
  },
  input: {
    height: 40,
    borderColor: colors.gray300,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    width: '80%',
  },
});
