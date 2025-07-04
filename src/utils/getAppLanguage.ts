import { Platform, NativeModules } from 'react-native';

export const deviceLanguage = () => {
  try {
    return Platform.OS === 'ios'
      ? NativeModules?.SettingsManager?.settings?.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;
  } catch (error) {
    console.log('Lang Error: ', error);
    return '';
  }
};

export const sortdeviceLanguage = () => {
  try {
    let value =
      Platform.OS === 'ios'
        ? NativeModules?.SettingsManager?.settings?.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    let deviceLang = value?.substring(0, 2);
    return deviceLang;
  } catch (error) {
    console.log('Lang Error: ', error);
    return '';
  }
};
