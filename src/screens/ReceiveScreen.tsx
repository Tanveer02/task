import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {saveBase64File} from '../utils/file';
import {Peer} from '../webrtc/Peer';

export const ReceiveScreen: React.FC<{answerQR: string}> = ({answerQR}) => {
  const [peer] = useState(() => new Peer());
  const [buffer, setBuffer] = useState<string[]>([]);
  const [filename, setFilename] = useState<string>();

  useEffect(() => {
    (async () => {
      // parse and finalize
      const ans = JSON.parse(answerQR);
      await peer.finalize(ans);
      // listen for messages
      peer.dc!.onmessage = async ({data}) => {
        try {
          const msg = JSON.parse(data as string);
          if (msg.filename) {
            setFilename(msg.filename);
          }
        } catch {
          // raw chunk
          setBuffer(b => [...b, data as string]);
        }
        if (buffer.length && filename) {
          const base64 = buffer.join('');
          const path = await saveBase64File(filename, base64);
          Alert.alert(`Saved to ${path}`);
        }
      };
    })();
  }, [answerQR, buffer, filename, peer]);

  return (
    <View>
      <Text>Receiving…</Text>
    </View>
  );
};
