import AsyncStorage from '@react-native-community/async-storage';
export default class StorageUtil {
  /**
   * 获取
   * @param {*} key
   */
  static async get(key) {
    let res = await AsyncStorage.getItem(key);
    return JSON.parse(res);
  }

  /**
   * 保存
   * @param {*} key
   * @param {*} value
   */
  static async save(key, value) {
    let _value;
    if (typeof value === 'string') {
      _value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, _value);
  }

  /**
   * 更新
   * @param {*} key
   * @param {*} value
   */
  static async update(key, value) {
    let _value;
    if (typeof value === 'string') {
      _value = JSON.stringify(value);
    }
    await AsyncStorage.mergeItem(key, _value);
  }

  /**
   * 删除
   * @param key
   */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }

  /**
   * 获取所有 key 值
   */
  static async getAllKeys() {
    return await AsyncStorage.getAllKeys();
  }
}
