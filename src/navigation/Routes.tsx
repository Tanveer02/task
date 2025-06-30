import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert, Button} from 'react-native';
import {QRScanner} from '../components/CustomCompo/QRScanner';
import {ReceiveScreen} from '../screens/ReceiveScreen';
import {ShareScreen} from '../screens/ShareScreen';
import {Peer} from '../webrtc/Peer';
import {OfferQRCode} from '../components/CustomCompo/OfferQRCode';

const Stack = createStackNavigator();

export default function App() {
  const [offer, setOffer] = useState<any>();
  const [answer, setAnswer] = useState<string>();

  const peer = new Peer();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Offer">
          {() => (
            <>
              {!offer ? (
                <Button
                  title="Create Offer"
                  onPress={async () => setOffer(await peer.createOffer())}
                />
              ) : (
                <OfferQRCode offer={offer} />
              )}
              {offer && (
                <Stack.Screen name="ScanOffer">
                  {({navigation}) => (
                    <QRScanner
                      onScan={value => {
                        if (value) {
                          const offer = JSON.parse(value);
                          setOffer(offer); // store in state
                          navigation.navigate('Share'); // or next screen
                        } else {
                          Alert.alert('Scanned QR is invalid');
                        }
                      }}
                      onClose={() => navigation.goBack()}
                    />
                  )}
                </Stack.Screen>
              )}
            </>
          )}
        </Stack.Screen>
        <Stack.Screen name="Share" component={ShareScreen} />
        <Stack.Screen name="Receive">
          {() => answer && <ReceiveScreen answerQR={answer} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
