import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiryInMinutes = 10;

interface CacheItem {
  value: any;
  timestamp: string;
}

interface GetCacheItem {
  value: any;
}

// To store Data with Expiry Functionality
const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log('error storing cache-->', error);
  }
};

const get = async (key: string | null): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item: CacheItem | null = value ? JSON.parse(value) : null;

    if (!item) return null;

    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    const isExpired = now.diff(storedTime, 'minutes') > expiryInMinutes;

    if (isExpired) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log('error getting cache-->', error);
  }
};
//////////////////////////////////////////////////////////////

// storing, getting and removing cache
const storeCache = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('error store cache-->', error);
  }
};

const getCache = async (key: string | null): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item: GetCacheItem | null = value ? JSON.parse(value) : null;

    if (!item) return null;

    return item;
  } catch (error) {
    console.log('error get cache-->', error);
  }
};

const remove = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch {
    console.log('error removing cache');
  }
};

export default {
  store,
  get,
  storeCache,
  getCache,
  remove,
};
