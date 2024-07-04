'use strict';


import CryptoJS from 'crypto-js';

const decryptText = ((str) => {
    const key = import.meta.env.VITE_CRYPTO_KEY; ; 
    // const bytes = CryptoJS.AES.decrypt(str, key);

    // return bytes.toString(CryptoJS.enc.Utf8)

    let reb64 = CryptoJS.enc.Hex.parse(str);
    let bytes = reb64.toString(CryptoJS.enc.Base64);
    let decrypt = CryptoJS.AES.decrypt(bytes, key);
    return decrypt.toString(CryptoJS.enc.Utf8);
})

const func = {
    decryptText
}

export default func