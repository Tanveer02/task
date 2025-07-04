import React, { memo, useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import images from "../../assets/images/images";
import { colors } from "../../theme/colors";
import RegularText from "../Text/RegularText";
import CustomImage from "../Image/CommonImage";

const CustomLoader = ({ size = 30, wholeScreen = false, title = "" }) => {
  const loader = useMemo(
    () => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: colors.white,
        }}
      >
        <CustomImage
          source={images.cubeLoader}
          style={{ width: 180, height: 180 }}
        />
      </View>
    ),
    []
  );

  return wholeScreen ? (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        zIndex: 100,
      }}
    >
      {loader}
      <RegularText
        text={title}
        textStyle={{ textAlign: "center", color: colors.textBlack }}
      />
    </View>
  ) : (
    loader
  );
};

export default memo(CustomLoader);
