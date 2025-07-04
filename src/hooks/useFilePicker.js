import { useState } from "react";
import DocumentPicker, { types } from "react-native-document-picker";
import RNFS from "react-native-fs";
import { showToast } from "../components/Toast/AnimatedToast";

const useFilePicker = (maxFileSizeMB = 5) => {
  const [fileData, setFileData] = useState(null);
  const [error, setError] = useState(null);

  const pickAndConvertFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [types.pdf, types.images],
      });

      if (result && result[0]) {
        const fileUri = result[0]?.uri;
        const fileSize = result[0]?.size;
        const maxFileSizeInBytes = maxFileSizeMB * 1024 * 1024;

        if (fileSize <= maxFileSizeInBytes) {
          const base64File = await RNFS.readFile(fileUri, "base64");
          setFileData(base64File);
          setError(null);
        } else {
          showToast(
            t("profileDashboard.Reduce_image_size_to_5MB_or_less"),
            "error"
          );
          setError("File is larger than the allowed size");
        }
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        setError("User cancelled the picker");
      } else {
        setError("Error: " + err?.message);
      }
    }
  };

  return [fileData, error, pickAndConvertFile];
};

export default useFilePicker;
