import {useGlobleAction} from '../../../play-and-dream-application-staging/src/redux/actionHook/useGlobleAction';
import {chnageAppLanguage} from '../../../play-and-dream-application-staging/src/i18n/i18n';
import userPreference from '../../../play-and-dream-application-staging/src/localStorage/userPrefrence';
import {
  deviceLanguage,
  sortdeviceLanguage,
} from '../../../play-and-dream-application-staging/src/utility/getAppLanguage';
import {Platform} from 'react-native';

const useChangeLanguage = () => {
  const {isRtl, setIsAppRtl} = useGlobleAction();
  let deviceLang = sortdeviceLanguage();
  const changeLanguage = async () => {
    try {
      await chnageAppLanguage(getLanguage());
    } catch (error) {}
    userPreference.setAppLanguage(getLanguage());
    setIsAppRtl(!isRtl);
  };

  const getLanguage = () => {
    let languageName = isRtl ? 'en' : 'ar';
    if (Platform.OS == 'android') {
      languageName =
        deviceLang == 'en' ? (isRtl ? 'en' : 'ar') : isRtl ? 'ar' : 'en';
    } else {
      languageName = isRtl ? 'en' : 'ar';
    }

    return languageName;
  };

  return {changeLanguage, getLanguage};
};

export default useChangeLanguage;
