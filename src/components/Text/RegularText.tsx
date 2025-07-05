import React, {ReactNode} from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';
import {fontFamily} from '../../theme/typography';
import {colors} from '../../theme/colors';

interface CustomTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  regular?: boolean;
  semibold?: boolean;
  medium?: boolean;
  center?: boolean;
  numberOfLines?: number;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  bold,
  regular,
  semibold,
  medium,
  center,
  numberOfLines,
  ...rest
}) => {
  const isRegular = !bold && !semibold && !medium;
  const combinedStyles = StyleSheet.flatten([
    styles.base,
    isRegular && styles.regular,
    bold && styles.bold,
    regular && styles.regular,
    semibold && styles.Semibold,
    medium && styles.Medium,
    center && styles.center,
    style,
  ]) as TextStyle;

  return (
    <Text style={combinedStyles} {...rest} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    color: colors.black,
  },
  Medium: {
    fontFamily: fontFamily.Medium,
  },
  Semibold: {
    fontFamily: fontFamily.Semibold,
  },
  regular: {
    fontFamily: fontFamily.Regular,
  },
  bold: {
    fontFamily: fontFamily.Bold,
  },
  center: {
    textAlign: 'center',
  },
});

export default CustomText;
