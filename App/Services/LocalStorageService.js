import AsyncStorage from "@react-native-community/async-storage";

export class LocalStorageService {
  static getParsedData(data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  static async get(key, defaultValue) {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data) {
        return LocalStorageService.getParsedData(data);
      } else {
        return defaultValue;
      }
    } catch (e) {
      console.log(e);
      return defaultValue;
    }
  }

  static async set(key, value) {
    try {
      if (typeof value === "string") {
        await AsyncStorage.setItem(key, value);
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }
}
