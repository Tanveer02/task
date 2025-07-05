import AddScreen from '../../screens/BottomTabScreen/AddScreen/AddScreen';
import HomeScreen from '../../screens/BottomTabScreen/HomeScreen/HomeScreen';
import NoteScreen from '../../screens/BottomTabScreen/NoteScreen/NoteScreen';
import ProfileScreen from '../../screens/BottomTabScreen/ProfileScreen/ProfileScreen';
import SearchScreen from '../../screens/BottomTabScreen/SearchScreen/SearchScreen';
import type React from 'react';
import {RootTabParamList} from '../../types/types';
import {ScreenName, ScreenNameValue} from '../../constants/screenConstant';

type TabScreen = {
  name: ScreenNameValue;
  component: React.ComponentType<any>;
  label: string;
  family?: string;
  icon?: {
    active: string;
    inactive: string;
  };
};

export const tabScreens: TabScreen[] = [
  {
    name: ScreenName.HOME,
    component: HomeScreen,
    label: 'Home',
    family: 'Ionicons',
    icon: {active: 'home', inactive: 'home-outline'},
  },
  {
    name: ScreenName.SEARCH,
    component: SearchScreen,
    label: 'Search',
    family: 'FontAwesome', // ← maybe you want a FontAwesome search icon?
    icon: {active: 'search', inactive: 'search'},
  },
  {
    name: ScreenName.PROFILE,
    component: ProfileScreen,
    label: 'Profile',
    family: 'MaterialIcons',
    icon: {active: 'person', inactive: 'person-outline'},
  },
  {
    name: ScreenName.NOTE,
    component: NoteScreen,
    label: 'Notes',
    family: 'Feather',
    icon: {active: 'book', inactive: 'book-open'},
  },
  {
    name: ScreenName.ADD,
    component: AddScreen,
    label: 'Add',
    family: 'Entypo',
    icon: {active: 'plus', inactive: 'circle-with-plus'},
  },
];
