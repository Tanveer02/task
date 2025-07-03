import React, {
  createContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { Animated, StyleSheet, View } from "react-native";
import { ToastType } from "../../types/types";
import { colors } from "../../theme/colors";
import RegularText from "../Text/RegularText";
import { fontFamily, fontsSize } from "../../theme/typography";
import { globalPaddingMargin } from "../../constants/constants";
import { isIOS } from "../../helper/screenHelper";

type ToastContextType = {
  showToast: (
    title: string,
    subtitle?: string,
    type?: ToastType,
    duration?: number
  ) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

let showToast: (
  title: string,
  subtitle?: string,
  type?: ToastType,
  duration?: number
) => void;

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(3000);
  const [type, setType] = useState<ToastType>("success");

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showToastGlobal = (
    title: string,
    subtitle: string = "",
    type: ToastType = "success",
    duration = 3000
  ) => {
    setTitle(title);
    setSubtitle(subtitle);
    setType(type);
    setDuration(duration);
  };

  useEffect(() => {
    showToast = showToastGlobal;
  }, []);

  const handleClose = () => {
    setTitle(null);
    setSubtitle(null);
  };

  useEffect(() => {
    if (!title) return;

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => handleClose());
    }, duration);

    return () => clearTimeout(timer);
  }, [title, duration, fadeAnim]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {title && (
        <Animated.View
          style={[
            styles.toastContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <View
            style={[
              styles.line,
              {
                backgroundColor:
                  type === "success" ? "rgba(0, 255, 0, 0.5)" : colors.red,
              },
            ]}
          />
          <View style={{ padding: 10, justifyContent: "center" }}>
            <RegularText textStyle={styles.toastTitle} text={title} />
            {subtitle ? (
              <RegularText textStyle={styles.toastSubtitle} text={subtitle} />
            ) : null}
          </View>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
};

export { ToastProvider, showToast };

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    top: isIOS ? 20 : 10,
    left: 20,
    right: 20,
    borderRadius: globalPaddingMargin.radius,
    zIndex: 1000,
    height: 65,
    backgroundColor: colors.white,
    flexDirection: "row",
    overflow: "hidden",
  },
  toastTitle: {
    color: colors.activeBanner,
    fontSize: fontsSize.small,
    fontFamily: fontFamily.Semibold,
  },
  toastSubtitle: {
    color: colors.activeBanner_50,
    fontSize: fontsSize.small_13,
    marginTop: 3,
  },
  line: { width: 8, height: "100%" },
});
