import React, {PureComponent} from 'react';
import {StyleProp, TouchableOpacity, ViewProps, ViewStyle} from 'react-native'; // Import TouchableOpacity or Pressable
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IconFamily} from '../../types/types';

interface IconProps {
  name: string;
  family: IconFamily;
  color?: string;
  size?: number;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

interface IconState {}

export default class Icon extends PureComponent<IconProps, IconState> {
  static defaultProps = {
    name: 'home',
    family: AntDesign,
    color: '#000000',
    size: 20,
  };

  constructor(props: IconProps) {
    super(props);
  }

  getIconAndFamily = () => {
    let Family: any;
    const {color, size, name, family} = this.props;
    switch (family) {
      case 'AntDesign':
        Family = AntDesign;
        break;
      case 'EvilIcons':
        Family = EvilIcons;
        break;
      case 'Feather':
        Family = Feather;
        break;
      case 'FontAwesome':
        Family = FontAwesome;
        break;
      case 'FontAwesome5':
        Family = FontAwesome5;
        break;
      case 'Foundation':
        Family = Foundation;
        break;
      case 'MaterialCommunityIcons':
        Family = MaterialCommunityIcons;
        break;
      case 'MaterialIcons':
        Family = MaterialIcons;
        break;
      case 'Octicons':
        Family = Octicons;
        break;
      case 'SimpleLineIcons':
        Family = SimpleLineIcons;
        break;
      case 'Ionicons':
        Family = Ionicons;
        break;
      case 'Entypo':
        Family = Entypo;
        break;
      default:
        Family = AntDesign;
    }
    return <Family name={name} color={color} size={size} />;
  };

  render() {
    const {onPress, disabled = true, style} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled}
        style={style}>
        {this.getIconAndFamily()}
      </TouchableOpacity>
    );
  }
}
