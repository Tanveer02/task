import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import RegularText from "../Text/RegularText";
import { fontFamily, fontsSize } from "../../theme/typography";
import { globalPaddingMargin } from "../../constants/constants";
import { colors } from "../../theme/colors";
import SimpleButton from "../Buttons/SimpleButton";
import { commonShadow } from "../../styles/commonStyle";

interface MessageBoxProps {
  isModal: boolean;
  setIsModal?: (value: boolean) => void;
  title: string;
  subTitle?: string;
  cancelText?: string;
  mainButtonText: string;
  onPressCancel?: () => void;
  onPressMainButton?: () => void;
  isSingleButton?: boolean;
  disabled?: boolean;
}
export default function MessageBox(props: MessageBoxProps) {
  let {
    isModal,
    setIsModal,
    title,
    subTitle,
    cancelText,
    mainButtonText,
    onPressCancel = () => {},
    onPressMainButton = () => {},
    isSingleButton,
    disabled,
  } = props;

  return (
    <Modal visible={isModal} transparent animationType="fade">
      <View style={styles(false).mainContainer}>
        <View style={styles(false).innerMainView}>
          <RegularText text={title} textStyle={styles(false).titleStyle} />
          <RegularText
            text={subTitle}
            textStyle={styles(false).subTitleStyle}
          />
          {!isSingleButton ? (
            <View style={styles(false).buttonView}>
              <TouchableOpacity
                disabled={disabled}
                style={styles(false).buttonStyle}
                onPress={onPressCancel}
              >
                <RegularText
                  text={cancelText}
                  textStyle={styles(false).buttonText}
                />
              </TouchableOpacity>
              <TouchableOpacity
                disabled={disabled}
                style={[styles(false).buttonStyle, styles(false).secondButton]}
                onPress={onPressMainButton}
              >
                <RegularText
                  text={mainButtonText}
                  textStyle={[
                    styles(false).buttonText,
                    { color: colors.white },
                  ]}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <SimpleButton
              style={[styles(false).buttonStyle, { alignSelf: "center" }]}
              onPress={onPressCancel}
            >
              <RegularText
                text={cancelText}
                textStyle={styles(false).buttonText}
              />
            </SimpleButton>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = (isRtl: unknown) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: globalPaddingMargin.vertical - 5,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    innerMainView: {
      backgroundColor: colors.white,
      padding: globalPaddingMargin.gap,
      ...commonShadow(),
      borderRadius: globalPaddingMargin.radius,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    titleStyle: {
      color: colors.activeBanner,
      fontFamily: fontFamily.Semibold,
      fontSize: fontsSize.extraLarge,
    },
    subTitleStyle: {
      color: colors.activeBanner_50,
      fontFamily: fontFamily.Regular,
      fontSize: fontsSize.small,
      paddingTop: globalPaddingMargin.space,
      paddingBottom: globalPaddingMargin.vertical,
      textAlign: "center",
    },
    buttonView: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-evenly",
      width: "100%",
      paddingBottom: 3,
    },
    buttonStyle: {
      height: 45,
      width: "40%",
      backgroundColor: colors.white,
      borderRadius: 60,
      borderWidth: 1.3,
      borderColor: colors.activeBanner_50,
      alignItems: "center",
      justifyContent: "center",
    },
    secondButton: {
      backgroundColor: colors.primaryColor1,
      borderWidth: 0,
    },
    buttonText: {
      color: colors.activeBanner_50,
      fontFamily: fontFamily.Semibold,
      fontSize: fontsSize.default,
    },
  });
