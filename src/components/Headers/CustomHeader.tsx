import React, { memo, ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../theme/colors";
import { commonShadow } from "../../styles/commonStyle";
import LinearGradient from "react-native-linear-gradient";
import Icon from "../Icon/Icon";
import CustomImage from "../Image/CommonImage";
import images from "../../assets/images/images";
import NVM from "../../helper/NVManager";
import { globalPaddingMargin } from "../../constants/constants";
import { ScreenName } from "../../constants/screenConstents";

interface CustomHeaderProps {
  mainContainer?: ViewStyle;
  isBackButton?: boolean;
  isSearchButton?: boolean;
  isWishButton?: boolean;
  isCartButton?: boolean;
  isNotificationButton?: boolean;
  isClose?: boolean;
  closePress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  mainContainer = {},
  isBackButton = false,
  isSearchButton = false,
  isWishButton = false,
  isCartButton = false,
  isNotificationButton = false,
  isClose = false,
  closePress = () => {},
}) => {
  return (
    <LinearGradient
      colors={[
        "rgba(0, 125, 186, 1)",
        "rgba(0, 125, 186, .95)",
        "rgba(0, 125, 186, 0.9)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradientStyle}
    >
      <View style={[styles.mainContainer, mainContainer]}>
        <View style={styles.logoView}>
          {isBackButton && (
            <Icon
              name="arrow-left"
              family="Feather"
              size={27}
              color={colors.white}
              disabled={false}
              onPress={() => NVM.goBack()}
            />
          )}
          <CustomImage source={images.logo} style={styles.logoImg} />
        </View>
        <View style={styles.iconView}>
          {isSearchButton && (
            <Icon
              name="search1"
              family="AntDesign"
              size={27}
              color={colors.white}
              disabled={false}
              onPress={() => NVM.navigate(ScreenName.SearchScreen)}
            />
          )}
          {isNotificationButton && (
            <CustomImage
              source={images.headerBell}
              style={{ height: 29, width: 29 }}
              disabled={false}
              onPress={() => NVM.navigate(ScreenName.NotificationScreen)}
            />
          )}
          {isWishButton && (
            <Icon
              name="heart-outlined"
              family="Entypo"
              size={27}
              color={colors.white}
              disabled={false}
              onPress={() => NVM.navigate(ScreenName.WishListScreen)}
            />
          )}
          {isCartButton && (
            <CustomImage
              source={images.headerCart}
              style={{ height: 29, width: 29 }}
              disabled={false}
              onPress={() => {
                NVM.navigate(ScreenName.CART);
              }}
            />
          )}
          {isClose && (
            <CustomImage
              source={images.xMark}
              style={{ height: 22, width: 22 }}
              disabled={false}
              onPress={closePress}
            />
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    paddingHorizontal: globalPaddingMargin.gap,
  },
  logoView: { flexDirection: "row", alignItems: "center", gap: 10 },
  iconView: { flexDirection: "row", alignItems: "center", gap: 20 },
  logoImg: { height: 70, width: 70 },
  gradientStyle: {
    height: 65,
    width: "100%",
  },
});

export default memo(CustomHeader);
