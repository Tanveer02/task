import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native'; // point to correct types
import {RootTabParamList} from '../types/types';

export const navigationRef = createNavigationContainerRef<RootTabParamList>();

const NVM = {
  navigator: navigationRef,

  navigate(name: keyof RootTabParamList, params?: any) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.navigate({name, params}));
    } else {
      console.warn('[NVM] Navigation not ready:', name);
    }
  },

  navigateAndClear(name: keyof RootTabParamList, params?: any) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name, params}],
        }),
      );
    } else {
      console.warn('[NVM] Navigation not ready:', name);
    }
  },

  goBack() {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.goBack());
    } else {
      console.warn('[NVM] Cannot go back: navigator not ready.');
    }
  },
};

export default NVM;
