import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';
import {colors} from '../../theme/colors';
import Icon from '../Icon/Icon';
import {useGlobleAction} from '../../redux/actionHook/useGlobleAction';
import SimpleButton from '../Buttons/SimpleButton';

interface CustomTextInputProps {
  onChangeText?: any;
  style?: StyleProp<ViewStyle>;
  placeholder?: any;
  width?: string | number;
  marginVertical?: string | number;
  value?: any;
  otherProps?: any;
  multiline?: any;
  iconName?: string;
  iconFamily?: any;
  iconSize?: any;
  iconColor?: any;
  height?: string | number;
  isError?: boolean;
  errorMessage?: string | undefined | null;
  onFocus?: () => void;
  onBlur?: () => void;
  onPress?: () => void;
  handleCancelPress?: () => void;
  keyboardType?: string;
  contextMenuHidden?: boolean;
  textContentType?: string;
  secureTextEntry?: boolean;
  isEditable?: boolean;
  rightIconName?: string;
  rightIconFamily?: any;
  rightIconSize?: any;
  rightIconColor?: any;
  marginTop?: string | number;
  onPressIn?: () => void;
  isAutoCapitalize?: string;
  refrence?: any;
}

const CustomTextInput = (prop: CustomTextInputProps) => {
  const {
    onChangeText,
    style,
    placeholder,
    width = '100%',
    marginVertical,
    value,
    otherProps,
    multiline = false,
    iconName,
    iconFamily,
    iconSize,
    iconColor,
    height,
    isError,
    errorMessage,
    onFocus,
    onBlur,
    onPress,
    handleCancelPress,
    keyboardType,
    contextMenuHidden,
    textContentType,
    secureTextEntry,
    rightIconName,
    rightIconFamily,
    rightIconSize,
    rightIconColor,
    marginTop,
    onPressIn,
    isEditable,
    isAutoCapitalize,
    refrence,
  } = prop;
  const {isRtl} = useGlobleAction();

  return (
    <View>
      <View
        style={[
          styles(isRtl).container,
          {width, marginVertical, height, marginTop},
        ]}>
        {iconName && (
          <View style={styles(isRtl).icon}>
            {iconName === 'cancel' ? (
              <SimpleButton onPress={handleCancelPress}>
                <Icon
                  name={iconName}
                  family={iconFamily}
                  size={iconSize}
                  color={colors.primary}
                />
              </SimpleButton>
            ) : (
              <Icon
                name={iconName}
                family={iconFamily}
                size={iconSize}
                color={iconColor}
              />
            )}
          </View>
        )}

        <TextInput
          ref={refrence}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholderColor}
          style={[styles(isRtl).text, style]}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          cursorColor={colors.primary}
          {...otherProps}
          multiline={multiline}
          keyboardType={keyboardType}
          contextMenuHidden={contextMenuHidden}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          onPressIn={onPressIn}
          editable={isEditable}
          autoCapitalize={isAutoCapitalize}
        />
        {rightIconName && (
          <View style={{padding: 10}}>
            {rightIconName === 'cancel' || 'eye' ? (
              <SimpleButton onPress={handleCancelPress}>
                <Icon
                  name={rightIconName}
                  family={rightIconFamily}
                  size={rightIconSize}
                  color={colors.primary}
                />
              </SimpleButton>
            ) : (
              <Icon
                name={rightIconName}
                family={rightIconFamily}
                size={rightIconSize}
                color={rightIconColor}
              />
            )}
          </View>
        )}
      </View>
      {isError && (value == null || value?.length === 0) && errorMessage ? (
        <Text style={{color: colors.red}}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = (isRtl?: boolean | undefined) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderColor: colors.disableGray,
      borderRadius: 8,
      borderWidth: 1,
      marginVertical: 6,
      overflow: 'hidden',
      flexDirection: isRtl ? 'row-reverse' : 'row',
    },
    icon: {
      color: colors.white,
      fontSize: 20,
      paddingStart: isRtl ? 0 : 10,
      paddingEnd: isRtl ? 10 : 0,
    },
    text: {
      flex: 1,
      color: colors.black,
      paddingVertical: 6,
      textAlign: isRtl ? 'right' : 'left',
    },
  });

export default CustomTextInput;
