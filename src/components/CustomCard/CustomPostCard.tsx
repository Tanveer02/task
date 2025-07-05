import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import RegularText from '../Text/RegularText';
import {colors} from '../../theme/colors';
import {fontsSize} from '../../theme/typography';
import Icon from '../Icon/Icon';

export interface Post {
  id: string;
  username: string;
  avatar: any;
  image: any;
  caption: string;
  date: string;
  likes: number;
  heart: number;
  share: number;
}

interface CustomPostCardProps {
  item: Post;
}

const CustomPostCard: React.FC<CustomPostCardProps> = ({item}) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <RegularText bold style={styles.name}>
            {item?.username}
          </RegularText>
          <RegularText style={styles.date}>{item?.date}</RegularText>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <RegularText bold style={styles.followText}>
            Follow
          </RegularText>
        </TouchableOpacity>
      </View>
      <Image source={item?.avatar} style={styles.avatar} />
    </View>

    <Image source={item?.image} style={styles.image} />

    <View style={styles.footer}>
      <View>
        <View style={styles.likeView}>
          <Icon
            family="Ionicons"
            name="chatbubble-outline"
            size={25}
            onPress={() => {}}
            disabled={false}
          />
          <RegularText bold>{`${item?.likes?.toLocaleString()}K`}</RegularText>
        </View>
        <RegularText bold style={{fontSize: fontsSize.small_11}}>
          {'Ashok__123' + ' ' + item?.caption}
        </RegularText>
      </View>
      <View style={{flexDirection: 'row', gap: 5}}>
        <View style={styles.likeView}>
          <Icon
            family="Ionicons"
            name="heart-outline"
            size={25}
            onPress={() => {}}
          />
          <RegularText bold>{`${item?.heart?.toLocaleString()}K`}</RegularText>
        </View>
        <View style={styles.likeView}>
          <Icon
            family="FontAwesome"
            name="share-square"
            size={25}
            onPress={() => {}}
          />
          <RegularText bold>{`${item?.share?.toLocaleString()}M`}</RegularText>
        </View>
      </View>
    </View>
  </View>
);

export default CustomPostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
    paddingLeft: 15,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: 380,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  name: {
    color: colors.black,
    fontSize: fontsSize.small_13,
  },
  date: {
    color: colors.primaryColor,
    fontSize: fontsSize.small_11,
  },
  followButton: {
    marginLeft: 15,
    padding: 4,
    paddingHorizontal: 15,
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
  },
  followText: {
    fontSize: fontsSize.small_13,
  },
  likeView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
