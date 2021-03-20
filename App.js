/**
 * @author : BAILLAHI Lemine.
 */

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DeviceInfo from 'react-native-device-info';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from "react-native-crypto-js";
import Hmacsha1 from 'hmacsha1';

export default function App() {
  const [text, setText] = React.useState("");
  const [encrypted, setEncrypted] = React.useState("")

  //
  const encryptStore = async (key, data) => {
    const encryptedKey=Hmacsha1(key,DeviceInfo.getUniqueId());
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), DeviceInfo.getUniqueId()).toString()
    await AsyncStorage.setItem(encryptedKey, encryptedData);
  }
  //
  const decryptStorage = async (key) => {
    const value = await AsyncStorage.getItem(Hmacsha1(key,DeviceInfo.getUniqueId()))
    return CryptoJS.AES.decrypt(value, DeviceInfo.getUniqueId()).toString(CryptoJS.enc.Utf8)
  }
  //
  const removeEncryptStorage=async (key)=>{
    const value = await AsyncStorage.getItem(Hmacsha1(key,DeviceInfo.getUniqueId()))
    return AsyncStorage.removeItem(value)
  }
  //
  const testEncrypStorage = async () => {
    await encryptStore("user", "iiiooo");
    //console.log("hjh : ",decryptStorage("name"))
    decryptStorage("user").then(res => {
      console.log("user : ", res)
    }).catch(ex => console.log(ex))
  }
  React.useEffect(() => {
    testEncrypStorage()
  }, [])
  return (
    <View style={{
      flex: 1,
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Text>{text}</Text>
      <Text>{encrypted}</Text>
      <TouchableOpacity onPress={() => {
        console.log(Hmacsha1("Mesjkjsage", "Key"));

      }}>
        <Text>Encrypt Text</Text>
      </TouchableOpacity>
    </View>
  )
}
