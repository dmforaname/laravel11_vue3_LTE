'use strict';

const goToLogout = (() =>{
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return axios.post('/logout')
        .then(() => location.href = '/login').catch(err => { 
        location.href = '/login' })
})

const parseJwt = ((token) =>{

    console.log(token)

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
})

const func = {
    goToLogout,
    parseJwt 
}

export default func