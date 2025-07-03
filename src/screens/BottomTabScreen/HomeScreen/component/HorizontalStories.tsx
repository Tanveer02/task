import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import RegularText from '../../../../components/Text/RegularText';
import {colors} from '../../../../theme/colors';

interface Story {
  id: string;
  username: string;
  avatar: any;
}

const StoryItem: React.FC<{item: Story}> = ({item}) => (
  <View style={styles.storyItem}>
    <Image
      source={item.avatar}
      resizeMode="contain"
      style={styles.storyAvatar}
    />
    <RegularText numberOfLines={1}>{item.username}</RegularText>
  </View>
);

const HorizontalStories: React.FC<{
  data: Story[];
}> = ({data}) => (
  <FlatList
    data={data}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.storiesList}
    renderItem={({item}) => <StoryItem item={item} />}
  />
);

const styles = StyleSheet.create({
  storiesList: {paddingHorizontal: 8, paddingVertical: 12, paddingBottom: 25},
  storyItem: {width: 70, alignItems: 'center', marginHorizontal: 4},
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: colors.primaryColor,
  },
});

export default HorizontalStories;
