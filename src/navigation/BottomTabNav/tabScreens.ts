import AddScreen from '../../screens/BottomTabScreen/AddScreen/AddScreen';
import HomeScreen from '../../screens/BottomTabScreen/HomeScreen/HomeScreen';
import NoteScreen from '../../screens/BottomTabScreen/NoteScreen/NoteScreen';
import ProfileScreen from '../../screens/BottomTabScreen/ProfileScreen/ProfileScreen';
import SearchScreen from '../../screens/BottomTabScreen/SearchScreen/SearchScreen';
import type React from 'react';
import {RootTabParamList} from '../../types/types';

type TabScreen<T extends keyof RootTabParamList> = {
  name: T;
  component: React.ComponentType<any>;
  label: string;
};

export const tabScreens: TabScreen<keyof RootTabParamList>[] = [
  {name: 'Home', component: HomeScreen, label: 'Home'},
  {name: 'Search', component: SearchScreen, label: 'Search'},
  {name: 'Profile', component: ProfileScreen, label: 'Profile'},
  {name: 'Note', component: NoteScreen, label: 'Notes'},
  {name: 'Add', component: AddScreen, label: 'Add'},
];
