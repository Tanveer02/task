import i18n, { getLanguages } from 'react-native-i18n';
import * as RNLocalize from 'react-native-localize';
import ar from './languages/ar.json';
import en from './languages/en.json';
import userPreference from '../localStorage/userPrefrence';
import { deviceLanguage } from '../utility/getAppLanguage';

export const resources = {
  ['ar']: ar,
  ['en']: en
};

i18n.translations = {
  en: en,
  ar: ar
};
const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (callBack: any) => {
    return callBack(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

// i18n.use(languageDetector).use(initReactI18next).init({
//    resources,
//    fallbackLng: 'en',
//    returnEmptyString: false,
//    compatibilityJSON: 'v3',
//    partialBundledLanguages: true,
//    ns: [],
// });

i18n.fallbacks = true;

async function languageInitialize() {
  let lang = userPreference.getAppLanguage();
  if (lang) {
    await chnageAppLanguage(lang);
  } else {
    let value = deviceLanguage();
    userPreference.setAppLanguage(value);
  }
}
export default { languageInitialize };

export const chnageAppLanguage = async (lang: string) => {
  try {
    i18n.locale = lang;
  } catch (error) {
    console.log('Error', error);
  }
};

export const useTranslation = () => {
  const t = (value: string, opt = {}) => {
    return i18n.t(`translation.` + value, opt);
  };
  return { t };
};

export const I18N = (value: string, opt = {}) => {
  return i18n.t(`translation.` + value, { opt });
};
