import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../theme/colors";

interface GradientProps {
  color?: string[];
  style?: ViewStyle;
  children?: any;
  location?: number[];
}

const CustomVerticalGradient: React.FC<GradientProps> = ({
  color,
  style,
  children,
  location,
}) => {
  return (
    <LinearGradient
      colors={
        color ?? [
          "rgba(0, 125, 186, 0.9)",
          "rgba(0, 125, 186, 0.9)",
          "rgba(0, 125, 186, 0.9)",
          "rgba(0, 125, 186, 0.75)",
          "rgba(0, 125, 186, 0.78)",
          "rgba(0, 125, 186, 0.6)",
          "rgba(0, 125, 186, 0.5)",
          "rgba(0, 125, 186, 0.4)",
          "rgba(0, 125, 186, 0.3)",
          colors.transparent,
        ]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={location}
      style={[styles.gradientStyle, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    height: 190,
    width: "100%",
    paddingHorizontal: 10,
  },
});

export default CustomVerticalGradient;
