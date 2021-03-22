### RN-Encrypted-Storage : 
A react native package to securely store data locally, it adds to [AsyncStorage](http://www.github.com/BLemine) an **encryption** layer based on [AES](https://searchsecurity.techtarget.com/definition/Advanced-Encryption-Standard) and [Hmacsha1](https://docs.microsoft.com/fr-fr/dotnet/api/system.security.cryptography.hmacsha1?view=net-5.0) encryption algorithms, your data is now saved 100% **encrypted**.

### Installation : 
```shell
npm install rn_encrypted_storage
# or 
yarn add rn_encrypted_storage

## Install the peer-dependencies if your npm is between v3 and v7: 
npm i @react-native-async-storage/async-storage hmacsha1 react-native-device-info react-native-crypto-js
# or with 
yarn add @react-native-async-storage/async-storage hmacsha1 react-native-device-info react-native-crypto-js
```

### Usage : 

```js
import {encyptStorage,decryptStorage, removeEncryptStorage} from "rn_encrypted_storage";

...

const storeData=async(loggedUser)=>{
 await encryptStorage("name",loggedUser); // you don't need to stringify the object
}

...

const getData=()=>{
  decryptStorage("name").then(res=>{
    console.log(res) // this is your securely stored object, this retures it stringify so you can do :
    console.log(JSON.parse(res)) // if it's a json object
  }).catch(ex=>console.log(ex))
}

...

const remoteData=async ()=>{
  await remoteEncryptStorage("user");
}


```


### Example
For example check the folder [Example](https://github.com/BLemine/rn-encrypted-storage/blob/master/example/index.js)
