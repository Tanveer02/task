import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  View,
} from "react-native";

type LoaderSize = "small" | "large";

interface SimpleButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: () => void;
  isLoading?: boolean;
  loaderSize?: LoaderSize;
  disabled?: boolean;
}

const SimpleButton = ({
  style,
  children,
  onPress,
  isLoading,
  loaderSize,
  disabled,
}: SimpleButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      {isLoading ? <ActivityIndicator size={loaderSize} /> : children}
    </TouchableOpacity>
  );
};

export default SimpleButton;
