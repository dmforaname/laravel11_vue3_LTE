'use strict';

import store from './store';
import CryptoJS from 'crypto-js';

const encryptText = ((str) => {
    const key = import.meta.env.VITE_CRYPTO_KEY; 
    // return CryptoJS.AES.encrypt(str, key).toString();

    let b64 = CryptoJS.AES.encrypt(str, key).toString();
    let e64 = CryptoJS.enc.Base64.parse(b64);
    return e64.toString(CryptoJS.enc.Hex);
})

const goToLogout = ((to) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

    arrStorageList().forEach(item => localStorage.removeItem(item))
    localStorage.clear();

    let newTo
    if (to) newTo = encryptText(to) 
    
    let toUrl = (to) ? `/login?url=${newTo}` : '/login'

    return axios.post('/api/logout')
        .then(() => location.href = toUrl).catch(err => {

            location.href = toUrl
        })
})

const parseJwt = ((token) => {

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
})

const refreshToken = ((day) => {

    const api_uri = import.meta.env.VITE_API_URL
    const now = new Date().getTime()

    axios.get(`${api_uri}/refresh`)
        .then(res => {

            async function f() {

                let newRes = res.data.data
                localStorage.setItem('token', newRes['token'])
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + newRes['token']
                return true
            }

            f().then(i => {

                localStorage.setItem("token_ttl", now + (day * 60 * 60 * 1000))
                if (!store.getters.getUserLoaded) store.dispatch('getUserInfo')
            })

            return true

        }).catch(err => {
            console.log("err===========", err)
            goToLogout()
            // return;
        })
})

const arrStorageList = (() => {

    return [
        'token',
        'token_ttl',
        'keep_login'
    ];
})

const func = {
    goToLogout,
    parseJwt,
    refreshToken,
    arrStorageList,
    encryptText
}

export default func