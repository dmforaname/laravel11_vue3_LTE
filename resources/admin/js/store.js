// import { createApp } from 'vue';
import { createStore } from 'vuex'
import script from './script'

const store = createStore({  

    state : { 

        token: localStorage.getItem('token') || '',
        token_ttl: localStorage.getItem('token_ttl')  || '',
        user: {},
        userLoaded: false,
        keep_login: false,
        loginProcess: false,

    },
    mutations : { 

        login(state, obj) {
            // const now = new Date()

            localStorage.setItem("token", obj.token)
            localStorage.setItem("token_ttl", obj.token_ttl)
            localStorage.setItem("keep_login", obj.keep_login)
        },
        logout(state) {
            localStorage.removeItem("token")
            localStorage.removeItem("token_ttl")
        },
        setUser(state, obj){
            
            state.user = obj
        },
        setUserLoaded(state, bool){

            
            state.userLoaded = bool
        },
        setLoginProcess(state,bool) {

            state.loginProcess = bool
        }

    },
    actions: {  
        getUserInfo(context){ console.log('store_getUserInfo')

            const api_uri = import.meta.env.VITE_API_URL

            axios.get(`${api_uri}/auth/users`)
            .then(res => {
                // resolve(res)

                context.commit('setUserLoaded', true)
                context.commit('setLoginProcess',false)
                context.commit('setUser', res.data)

            }).catch(err=> {
                // reject(err)
                // document.cookie = 'sso_token=; Max-Age=-99999999;';
                // localStorage.removeItem('userInfo');
                console.log("err===========", err)
                // this.auth = false;
                // localStorage.removeItem('token');
                // localStorage.removeItem('token_ttl');
                // localStorage.clear();
                // delete axios.defaults.headers.common['Authorization'];
                // document.getElementById("logoutform").submit();
                // this.storageList.forEach(item => localStorage.removeItem(item))
                // localStorage.clear();
                script.goToLogout()
                return;
            })
        }
    },
    getters: {
        getUserLoaded (state) {
          return state.userLoaded
        },
        getLoginProcess (state) {
            return state.loginProcess
        }
    }
})

export default store