import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import RegularText from '../Text/RegularText';
import {fontsSize} from '../../theme/typography';
import {colors} from '../../theme/colors';

interface CustomHeaderProps {
  title: string;
  onProfilePress: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: ViewStyle;
  iconStyle?: ImageStyle;
  profileImage: ImageSourcePropType;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  onProfilePress,
  containerStyle,
  titleStyle,
  iconStyle,
  profileImage,
}) => (
  <View style={[styles.headerContainer, containerStyle]}>
    <TouchableOpacity onPress={onProfilePress}>
      <Image
        source={profileImage}
        style={[styles.headerIcon, iconStyle]}
        resizeMode="contain"
      />
    </TouchableOpacity>
    <RegularText italic style={[styles.title, titleStyle]}>
      {title}
    </RegularText>
  </View>
);

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.primaryColor,
    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: fontsSize.extraLarge,
    fontWeight: 'bold',
  },
  headerIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
