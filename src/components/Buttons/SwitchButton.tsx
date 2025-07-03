import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform} from 'react-native';
import {useGlobleAction} from '../../redux/actionHook/useGlobleAction';
import {colors} from '../../theme/colors';
import usechangeLanguage from '../../hooks/useChangeLanguage';
import SimpleButton from './SimpleButton';
import {sortdeviceLanguage} from '../../utility/getAppLanguage';

const SwitchButton = () => {
  const {isRtl} = useGlobleAction();
  const {changeLanguage} = usechangeLanguage();
  const deviceLangauge = sortdeviceLanguage();
  const getText = () => {
    if (Platform.OS == 'android') {
      return deviceLangauge == 'ar'
        ? isRtl
          ? 'EN'
          : 'عر'
        : isRtl
        ? 'عر'
        : 'EN';
    } else {
      return isRtl ? 'عر' : 'EN';
    }
  };
  return (
    <SimpleButton style={styles.switchContainer} onPress={changeLanguage}>
      <View
        style={[
          styles.thumb,
          isRtl ? styles.thumbArabic : styles.thumbEnglish,
        ]}>
        <Text style={styles.thumbText}>{getText()}</Text>
      </View>
    </SimpleButton>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 28,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 30,
    marginTop: 30,
    padding: 3,
  },

  thumb: {
    width: 25,
    height: 25,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.seconadary,
    position: 'absolute',
    marginHorizontal: 1,
  },
  thumbEnglish: {
    left: 0,
  },
  thumbArabic: {
    right: 0,
  },
  thumbText: {
    color: colors.black,
    fontSize: 12,
    fontWeight: '400',
  },
});
