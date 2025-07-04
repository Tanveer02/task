import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {postsMockData, storiesMockData} from '../../../mockData/homeMockData';
import CustomHeader from '../../../components/Headers/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import CustomPostCard from '../../../components/CustomCard/CustomPostCard';
import HorizontalStories from './component/HorizontalStories';
import images from '../../../assets/images/images';
import {colors} from '../../../theme/colors';

const HomeScreen: React.FC = () => {
  //   const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        title="TOUCH"
        profileImage={images.profileImage}
        onProfilePress={
          () => {}
          // navigation.navigate('Profile')
        }
      />
      <HorizontalStories data={storiesMockData} />
      <FlatList
        data={postsMockData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.postsList}
        renderItem={({item}) => <CustomPostCard item={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  storiesList: {paddingHorizontal: 8, paddingVertical: 12},
  storyItem: {width: 70, alignItems: 'center', marginHorizontal: 4},
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FF1493',
  },
  postsList: {},
  postCard: {marginBottom: 16, padding: 0},
  postHeader: {flexDirection: 'row', alignItems: 'center', padding: 12},
  postAvatar: {width: 40, height: 40, borderRadius: 20, marginRight: 8},
  postImage: {width: '100%', height: 300},
  postFooter: {paddingHorizontal: 12, paddingVertical: 8},
});
