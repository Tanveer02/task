import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import CustomButton from '../../../../play-and-dream-application-staging/src/components/Buttons/CustomButton';
import { I18N } from '../../../../play-and-dream-application-staging/src/i18n/i18n';
import RegularText from '../../../../play-and-dream-application-staging/src/components/Text/RegularText';

export const getNetworkInfo = () =>
  new Promise(resolve =>
    NetInfo.fetch().then(state => resolve(state?.isConnected)),
  );

const NoInternetModal = () => {
  const netInfo = useNetInfo();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setCanLoad(true), 3000);
  }, []);

  useEffect(() => {
    const connected = netInfo.isConnected && netInfo.isInternetReachable;
    if (netInfo) setShow(!connected ?? false);
  }, [netInfo]);

  const onRetry = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const connected = netInfo.isConnected && netInfo.isInternetReachable;
      if (connected) setShow(false);
      setLoading(false);
    }, 1000);
  }, [netInfo.isConnected, netInfo.isInternetReachable]);

  const renderModal = useMemo(
    () =>
      show && (
        <Modal isVisible={show} style={styles.modal} animationInTiming={600}>
          <View style={styles.modalContainer}>
            <RegularText
              text={I18N('netInfo.connection_error')}
              textStyle={styles.modalTitle}
            />
            <RegularText
              text={I18N('netInfo.connection_error_desc')}
              textStyle={styles.modalText}
            />
            <CustomButton
              onPress={onRetry}
              disabled={loading}
              title={
                loading ? I18N('netInfo.checking') : I18N('netInfo.try_again')
              }
            />
          </View>
        </Modal>
      ),
    [loading, onRetry, show],
  );

  return canLoad && renderModal;
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 18,
    color: '#555',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default NoInternetModal;
