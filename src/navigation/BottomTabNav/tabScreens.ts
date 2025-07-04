import HomeScreen from '../../screens/BottomTabScreen/HomeScreen/HomeScreen';
import type {RootTabParamList} from './RootTabs';

type TabScreen<T extends keyof RootTabParamList> = {
  name: T;
  component: React.ComponentType<any>;
  label: string;
};

export const tabScreens: TabScreen<keyof RootTabParamList>[] = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
  },
  {
    name: 'Settings',
    component: HomeScreen,
    label: 'Settings',
  },
];
