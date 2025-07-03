import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import RegularText from '../Text/RegularText';
import {colors} from '../../theme/colors';

export interface Post {
  id: string;
  username: string;
  avatar: any;
  image: any;
  caption: string;
  date: string;
  likes: number;
}

interface PostItemProps {
  item: Post;
}

const PostItem: React.FC<PostItemProps> = ({item}) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Image source={item.avatar} style={styles.avatar} />
      <RegularText>{item.username}</RegularText>
    </View>

    <Image source={item.image} style={styles.image} />

    <View style={styles.footer}>
      <RegularText>{`${item.likes.toLocaleString()} likes`}</RegularText>
      <RegularText>{item.caption}</RegularText>
      <RegularText>{item.date}</RegularText>
    </View>
  </View>
);

export default PostItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  footer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
