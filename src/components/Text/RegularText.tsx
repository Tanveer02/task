// src/components/CustomText.tsx
import React, {ReactNode} from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';

interface CustomTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  numberOfLines?: number;
  // more boolean shortcuts as needed
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  bold,
  italic,
  center,
  numberOfLines,
  ...rest
}) => {
  const combinedStyles = StyleSheet.flatten([
    styles.base,
    bold && styles.bold,
    italic && styles.italic,
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
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  center: {
    textAlign: 'center',
  },
});

export default CustomText;
