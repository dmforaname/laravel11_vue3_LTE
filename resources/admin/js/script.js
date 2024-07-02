'use strict';

import store from './store';

const goToLogout = (() => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

    arrStorageList().forEach(item => localStorage.removeItem(item))
    localStorage.clear();

    return axios.post('/api/logout')
        .then(() => location.href = '/login').catch(err => {
            location.href = '/login'
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

const refreshToken = (() => {

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

                return next()
            })

        }).catch(err => {
            console.log("err===========", err)

            arrStorageList().forEach(item => localStorage.removeItem(item))
            localStorage.clear();
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
    arrStorageList
}

export default func