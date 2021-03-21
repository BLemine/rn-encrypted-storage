/**
 * @author : BAILLAHI Lemine.
 */

import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from "react-native-crypto-js";
import Hmacsha1 from 'hmacsha1';

export const encryptStorage = async (key, data) => {
    const encryptedKey = Hmacsha1(key, DeviceInfo.getUniqueId());
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), DeviceInfo.getUniqueId()).toString()
    await AsyncStorage.setItem(encryptedKey, encryptedData);
}

export const decryptStorage = async (key) => {
    const value = await AsyncStorage.getItem(Hmacsha1(key, DeviceInfo.getUniqueId()))
    return CryptoJS.AES.decrypt(value, DeviceInfo.getUniqueId()).toString(CryptoJS.enc.Utf8)
}

export const removeEncryptStorage = async (key) => {
    return AsyncStorage.removeItem(Hmacsha1(key, DeviceInfo.getUniqueId()))
}