import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../../theme/colors";

interface StatusBarCompProps {
  backgroundColor?: any;
  barStyle?: "default" | "light-content" | "dark-content";
}

const StatusBarComp = (props: StatusBarCompProps) => {
  let { backgroundColor = colors.white, barStyle } = props;

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle || "light-content"}
        hidden={false}
        translucent={false}
      />
    </SafeAreaView>
  );
};

export default StatusBarComp;
