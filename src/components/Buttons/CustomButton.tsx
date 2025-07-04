import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import RegularText from "../Text/RegularText";
import { colors } from "../../theme/colors";
import { fontFamily } from "../../theme/typography";
import { TouchableOpacity } from "react-native";
import Icon from "../Icon/Icon";
import { Family } from "../../types/types";
import CustomImage from "../Image/CommonImage";

interface CustomButtonProps {
  title?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  disabled?: boolean;
  loader?: boolean;
  isLeftIcon?: boolean;
  leftIconName?: string;
  leftIconFamily?: Family;
  leftIconSize?: number;
  leftIconColor?: string;
  leftImageSource?: { uri: string };
}
export default function CustomButton(props: CustomButtonProps) {
  let {
    title = "CONTINUE",
    buttonStyle,
    titleStyle,
    onPress,
    disabled,
    loader,
    isLeftIcon = false,
    leftIconName,
    leftIconFamily,
    leftIconSize,
    leftIconColor = colors.primaryColor1,
    leftImageSource,
  } = props;

  return (
    <TouchableOpacity
      disabled={disabled || loader}
      style={[
        styles.buttonStyle,
        loader && { backgroundColor: colors.disableGray },
        buttonStyle,
      ]}
      onPress={() => onPress()}
    >
      {loader ? (
        <ActivityIndicator size={"large"} color={colors.primaryColor1_50} />
      ) : (
        <View style={{ flexDirection: "row", gap: 5 }}>
          {leftImageSource && (
            <CustomImage
              source={leftImageSource}
              style={{ height: 20, width: 20 }}
            />
          )}
          {isLeftIcon && (
            <Icon
              name={leftIconName}
              family={leftIconFamily}
              size={leftIconSize}
              color={leftIconColor}
            />
          )}
          <RegularText
            text={title}
            textStyle={[styles.titleStyle, titleStyle]}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primaryColor1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: { color: colors.white, fontFamily: fontFamily.Bold },
});
