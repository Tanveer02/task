import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import {DocumentPicker} from '@react-native-documents/picker'; // picker :contentReference[oaicite:10]{index=10}
import {readFileBase64} from '../utils/file';
import {Peer} from '../webrtc/Peer';

export const ShareScreen: React.FC = () => {
  const [peer] = useState(() => new Peer());
  const [file, setFile] = useState<{uri: string; name: string} | null>();
  const [chunks, setChunks] = useState<string[]>([]);

  const pickAndRead = async () => {
    const res = await DocumentPicker.pickSingle({allowedFileTypes: ['*/*']});
    setFile({uri: res.uri, name: res.name});
    const base64 = await readFileBase64(res.uri);
    // split into 64KB chunks:
    const size = 64 * 1024;
    const arr = [];
    for (let i = 0; i < base64.length; i += size) {
      arr.push(base64.slice(i, i + size));
    }
    setChunks(arr);
  };

  const sendFile = () => {
    if (!peer.dc || !file) return;
    // send metadata first
    peer.dc.send(JSON.stringify({filename: file.name, total: chunks.length}));
    chunks.forEach(c => peer.dc!.send(c));
  };

  return (
    <View>
      <Button title="Pick File" onPress={pickAndRead} />
      {file && <Text>Picked: {file.name}</Text>}
      <Button title="Send File" onPress={sendFile} disabled={!chunks.length} />
    </View>
  );
};
