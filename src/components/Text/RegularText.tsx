import React, {ReactNode} from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';
import {fontFamily} from '../../theme/typography';
import {colors} from '../../theme/colors';

interface CustomTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  regular?: boolean;
  center?: boolean;
  numberOfLines?: number;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  bold,
  regular,
  center,
  numberOfLines,
  ...rest
}) => {
  const combinedStyles = StyleSheet.flatten([
    styles.base,
    bold && styles.bold,
    regular && styles.regular,
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
