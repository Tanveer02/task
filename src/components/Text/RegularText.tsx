import React from "react";
import { Text, StyleSheet, TextStyle, StyleProp, View } from "react-native";
import { fontStyle } from "../../theme/typography";
import { useGlobleAction } from "../../redux/actionHook/useGlobleAction";

interface RegularTextProps {
  text?: any;
  textStyle?: StyleProp<TextStyle>;
  leftItem?: any;
  rightItem?: any;
  bottomItem?: any;
  topItem?: any;
  numberOfLines?: number;
  onPress?: () => void;
}

const NormalText = ({ text, textStyle, numberOfLines, onPress }: any) => {
  if (typeof text === "object") {
    return text;
  } else {
    return (
      <Text
        onPress={onPress}
        style={[fontStyle.regulerInterTitile, styles.text, textStyle]}
        numberOfLines={numberOfLines}
      >
        {text}
      </Text>
    );
  }
};

const RegularText = ({
  text,
  textStyle,
  leftItem,
  rightItem,
  bottomItem,
  topItem,
  numberOfLines,
  onPress,
}: RegularTextProps) => {
  const { isRtl } = useGlobleAction();
  return (
    <View style={styles.container}>
      {topItem ? <NormalText text={topItem} /> : null}
      <View style={{ flexDirection: isRtl ? "row-reverse" : "row" }}>
        {leftItem ? <NormalText text={leftItem} /> : null}
        <NormalText
          text={text}
          numberOfLines={numberOfLines}
          textStyle={textStyle}
          onPress={onPress}
        />
        {rightItem ? <NormalText text={rightItem} /> : null}
      </View>
      {bottomItem ? <NormalText text={bottomItem} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});

export default RegularText;
