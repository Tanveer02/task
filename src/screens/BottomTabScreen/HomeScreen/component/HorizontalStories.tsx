import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import RegularText from '../../../../components/Text/RegularText';
import {colors} from '../../../../theme/colors';
import {fontsSize} from '../../../../theme/typography';
import {shortenText} from '../../../../utils/utility';

interface Story {
  id: string;
  username: string;
  avatar: any;
}

const StoryItem: React.FC<{item: Story}> = ({item}) => (
  <View style={styles.storyItem}>
    <Image
      source={item?.avatar}
      resizeMode="contain"
      style={styles.storyAvatar}
    />
    <RegularText style={{fontSize: fontsSize.small}} numberOfLines={1}>
      {shortenText(item?.username)}
    </RegularText>
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
  storiesList: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    paddingBottom: 60,
  },
  storyItem: {width: 70, alignItems: 'center'},
  storyAvatar: {
    width: 55,
    height: 55,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: colors.primaryColor,
  },
});

export default HorizontalStories;
