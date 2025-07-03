import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  private _storage = AsyncStorage;
  constructor() {
    this._storage = AsyncStorage;
  }

  public async set<T>(key: string, value: T) {
    try {
      if (typeof value === 'string') {
        await AsyncStorage.setItem(key.toString(), value);
      } else if (typeof value === 'number' && !isNaN(value)) {
        await AsyncStorage.setItem(key.toString(), `${value}`);
      } else if (typeof value === 'boolean') {
        await AsyncStorage.setItem(key.toString(), `${value}`);
      } else if (typeof value === 'object') {
        await AsyncStorage.setItem(key.toString(), JSON.stringify(value));
      } else {
        throw new Error(
          'The value must be a type string,number , object or boolean.For objects please use JSON.stringify'
        );
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  public async getBoolean(key: string): Promise<boolean | undefined> {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value && value == 'true') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return undefined;
    }
  }
  public async getString(key: string): Promise<string | undefined> {
    try {
      const value = await AsyncStorage.getItem(key.toString());
      if (value === null) return;
      return value;
    } catch (error) {
      //console.log("getString error:", error);
      return undefined;
    }
  }

  public async getNumber(key: string): Promise<number | undefined> {
    try {
      const value = await AsyncStorage.getItem(key.toString());
      if (!value) return 0;
      return parseInt(value);
    } catch (error) {
      //console.log("getNumber error:", error);
      return undefined;
    }
  }
  public async getObject(key: string): Promise<any> {
    try {
      const value = await AsyncStorage.getItem(key.toString());
      if (!value) {
        return undefined;
      }
      return await JSON.parse(value);
    } catch (error) {
      //console.log("getObject error:", error);
      return undefined;
    }
  }

  public clearAll(): void {
    this._storage.clear();
  }

  public async clearAllBut(keysToKeep: string[]) {
    const allKeys = await this._storage.getAllKeys();
    const keysToRemove = allKeys.filter((value) => !keysToKeep.includes(value));
    this._storage.multiRemove(keysToRemove);
  }
}

const storage = new Storage();

export default storage;
