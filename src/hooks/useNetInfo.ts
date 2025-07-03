import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {useGlobleAction} from '../redux/actionHook/useGlobleAction';
export const useGetNetinfo = () => {
  const [isnetConnected, setIsnetConnected] = useState<boolean | null>(null);
  const {setNetConnected, isNetConnected} = useGlobleAction();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log('Is connected?', state.isConnected);
      setIsnetConnected(
        Platform.OS == 'ios' ? !state.isConnected : state.isConnected,
      );
      setNetConnected(
        Platform.OS == 'ios' ? !state.isConnected : state.isConnected,
      ); //This value will be used in redux, no ned to use this hook after routs
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return {
    isnetConnected,
  };
};
