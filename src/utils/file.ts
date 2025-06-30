import RNFS from 'react-native-fs';

export async function readFileBase64(uri: string): Promise<string> {
  return RNFS.readFile(uri, 'base64'); // RNFS.readFile supports base64 :contentReference[oaicite:5]{index=5}
}

export async function saveBase64File(
  filename: string,
  base64Data: string,
): Promise<string> {
  const path = `${RNFS.DocumentDirectoryPath}/${filename}`;
  await RNFS.writeFile(path, base64Data, 'base64');
  return path;
}
