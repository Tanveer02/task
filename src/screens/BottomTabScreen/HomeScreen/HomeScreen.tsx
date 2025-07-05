import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {postsMockData, storiesMockData} from '../../../mockData/homeMockData';
import CustomPostCard from '../../../components/CustomCard/CustomPostCard';
import HorizontalStories from './component/HorizontalStories';
import {colors} from '../../../theme/colors';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HorizontalStories data={storiesMockData} />
      <FlatList
        data={postsMockData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          const isLast = index === postsMockData?.length - 1;
          const style = isLast ? {paddingBottom: 50} : {};
          return (
            <View style={style}>
              <CustomPostCard item={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
