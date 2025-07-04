import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import RegularText from '../Text/RegularText';
import {colors} from '../../theme/colors';
import {fontsSize} from '../../theme/typography';

export interface Post {
  id: string;
  username: string;
  avatar: any;
  image: any;
  caption: string;
  date: string;
  likes: number;
}

interface CustomPostCardProps {
  item: Post;
}

const CustomPostCard: React.FC<CustomPostCardProps> = ({item}) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <RegularText style={styles.name}>{item?.username}</RegularText>
          <RegularText style={styles.date}>{item?.date}</RegularText>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <RegularText style={styles.followText}>Follow</RegularText>
        </TouchableOpacity>
      </View>
      <Image source={item?.avatar} style={styles.avatar} />
    </View>

    <Image source={item?.image} style={styles.image} />

    <View style={styles.footer}>
      <RegularText>{`${item?.likes.toLocaleString()} likes`}</RegularText>
      <RegularText>{item?.caption}</RegularText>
      <RegularText>{item?.date}</RegularText>
    </View>
  </View>
);

export default CustomPostCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    paddingLeft: 16,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: 350,
  },
  footer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  name: {
    color: colors.black,
    fontSize: fontsSize.small_11,
    fontWeight: '800',
  },
  date: {
    color: colors.primaryColor,
    fontSize: fontsSize.small_11,
  },
  followButton: {
    marginLeft: 15,
    padding: 4,
    paddingHorizontal: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
  },
  followText: {
    fontSize: fontsSize.small,
    fontWeight: '800',
  },
});
