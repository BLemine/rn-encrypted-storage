### RN-Encrypted-Storage : 
A react native package to securely store data locally, it adds to [AsyncStorage](http://www.github.com/BLemine) an **encryption** layer based on [AES](https://searchsecurity.techtarget.com/definition/Advanced-Encryption-Standard) and [Hmacsha1](https://docs.microsoft.com/fr-fr/dotnet/api/system.security.cryptography.hmacsha1?view=net-5.0) encryption algorithms, your data is now saved 100% **encrypted**.

### Installation : 
```shell
npm install rn-encrypted-storage
# or 
yarn add rn-encrypted-storage
```

### Usage : 

```js
import {encyptStorage,decryptStorage, removeEncryptStorage} from "rn-encrypted-storage";

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
For example check the folder [Example](./example/index.js)

[React-Native](http://www.github.com/BLemine)
