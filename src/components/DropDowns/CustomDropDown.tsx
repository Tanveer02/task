import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { Colors } from "../../theme/colors";
import { useGlobleAction } from "../../redux/actionHook/useGlobleAction";
import RegularText from "../Text/RegularText";
import { useTranslation } from "../../i18n/i18n";
interface DropDownProps {
  isDropDownOpen?: boolean;
  width?: string;
  mainStyle?: StyleProp<ViewStyle>;
  data?: Array<any> | undefined;
  ddStyle?: StyleProp<ViewStyle>;
  ddItemStyle?: StyleProp<ViewStyle>;
  ddSeparatorStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  selectedValue?: any;
  leftIcon?: boolean;
  caretdown?: boolean;
  title?: any;
  placeHolder?: any;
  onPressItem?: (data?: string) => void;
  selectedListIsScrollView?: boolean;
  isError?: boolean;
  errorMessage?: string | undefined | null;
  isSectionList?: boolean;
  selectedContainerStyle?: StyleProp<ViewStyle>;
  isNotTitleShow?: boolean;
}
const Dropdown = (prop: DropDownProps) => {
  const { t } = useTranslation();
  const {
    //isDropDownOpen = true,
    mainStyle,
    data = [],
    ddSeparatorStyle,
    placeHolder = t("SalaryReviewScreen.select"),
    ddItemStyle,
    selectedValue,
    selectedTextStyle,
    title,
    leftIcon,
    caretdown,
    onPressItem,
    selectedListIsScrollView,
    isError,
    errorMessage,
    isSectionList,
    selectedContainerStyle,
    isNotTitleShow,
  } = prop;
  const { isRtl } = useGlobleAction();

  //TODO:: Line number 39 willl be chnage after mail logic implemantation
  const [isDropDownOpen, seIsDropDownOpen] = useState(false);
  const chnageDdState = () => {
    seIsDropDownOpen(!isDropDownOpen);
  };
  const ListItem = (props: any) => {
    const { item, index } = props;
    return (
      <TouchableOpacity
        style={[styles(isRtl).itemContainer, ddItemStyle]}
        onPress={() => {
          onPressItem?.(item);
          chnageDdState();
        }}
      >
        <Text style={[{ color: Colors.placeholderColor }]}>
          {item?.title ? item.title : "Select"}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[mainStyle]}>
      {isNotTitleShow ? null : (
        <RegularText textStyle={styles(isRtl).title} text={title} />
      )}
      <View style={styles(isRtl).container}>
        <TouchableOpacity
          style={[styles(isRtl).selectedContainerStyle, selectedContainerStyle]}
          onPress={() => {
            chnageDdState();
          }}
        >
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
              }}
            >
              {leftIcon ? (
                <View style={{ paddingHorizontal: 5 }}>
                  <Icon name={"menu"} family="MaterialIcons" size={18} />
                </View>
              ) : null}
              <Text
                style={[styles(isRtl).selectedTextStyle, selectedTextStyle]}
              >
                {selectedValue ? selectedValue : placeHolder}
              </Text>
            </View>
            {caretdown ? (
              <Icon
                name={isDropDownOpen ? "caretup" : "caretdown"}
                family="AntDesign"
                size={15}
                color={Colors.placeholderColor}
              />
            ) : (
              <Icon
                name={isDropDownOpen ? "up" : "down"}
                family="AntDesign"
                size={15}
                color={Colors.primary}
              />
            )}
          </View>
        </TouchableOpacity>
        {!isDropDownOpen ? null : (
          <View>
            <View style={styles(isRtl).separator} />
            {selectedListIsScrollView ? (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles(isRtl).ddStyle}
                nestedScrollEnabled={true}
              >
                {data?.map((item: any, index: any) => (
                  <ListItem item={item} index={index} key={index} />
                ))}
              </ScrollView>
            ) : (
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                style={styles(isRtl).ddStyle}
                renderItem={ListItem}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        )}
      </View>
      {selectedValue == null && isError && errorMessage ? (
        <Text style={{ color: Colors.red }}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default Dropdown;

const styles = (isRtl: boolean | undefined) =>
  StyleSheet.create({
    selectedContainerStyle: {
      height: 40,
      // borderWidth: 1,
      // borderRadius: globalPaddingMargin.radius,
      borderColor: Colors.lightGray,
      justifyContent: "center",
      //alignItems: isRtl ? 'flex-end' : 'flex-start',
      paddingHorizontal: 10,
      backgroundColor: Colors.white,
    },
    container: {
      // maxHeight:200,
      borderRadius: 8,
      overflow: "hidden",
      backgroundColor: Colors.white,
      borderWidth: 1,
      borderColor: Colors.lightGray,
    },
    ddStyle: {
      marginVertical: 8,
      maxHeight: 100,
    },
    itemContainer: {
      justifyContent: "center",
      paddingHorizontal: 15,
      alignItems: isRtl ? "flex-end" : "flex-start",
    },
    selectedTextStyle: {
      color: Colors.placeholderColor,
      alignSelf: "center",
      // paddingHorizontal: 10
    },
    title: { alignSelf: isRtl ? "flex-end" : "flex-start" },

    separator: {
      marginHorizontal: 8,
      height: 1,
      backgroundColor: Colors.lightGray,
    },
  });
