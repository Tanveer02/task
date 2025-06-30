import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useCodeScanner,
  CameraPermissionStatus,
  useCameraPermission,
} from 'react-native-vision-camera';

type Props = {
  onScan: (value: string | null) => void;
  onClose?: () => void;
};

export const QRScanner: React.FC<Props> = ({onScan, onClose}) => {
  const [scanDone, setScanDone] = useState(false);
  const devices = useCameraDevices();
  const device = devices;

  // Setup the code scanner
  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      if (scanDone || codes.length === 0) return;
      const value = codes[0].value;
      setScanDone(true);
      try {
        JSON.parse(value);
        onScan(value);
      } catch {
        console.warn('Invalid QR code:', value);
        onScan(null);
      }
      onClose?.();
    },
  });

  if (!device) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No camera device found.</Text>
      </View>
    );
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={codeScanner.onCodeScanned}
        fps={5}
      />
      {scanDone && (
        <View style={styles.overlay}>
          <Text style={styles.text}>Scanned!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 16, padding: 8},
  overlay: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
