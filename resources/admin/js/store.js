// import { createApp } from 'vue';
import { createStore } from 'vuex'

const store = createStore({  

    state : { 

        token: localStorage.getItem('token') || '',
        token_ttl: localStorage.getItem('token_ttl')  || '',
        user: {},
        userLoaded: false,
        keep_login: false

    },
    mutations : { 

        login(state, obj) {
            const now = new Date()

            // console.log("obj" + obj)

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

    },
    actions: {  
        getUserInfo(context , id){ 
            // console.log('getUserInfo')
            // context.commit('setUserLoaded', true)
            // context.commit('setUser', { email:"dmforaname@gmail.com",is_active : true,is_admin: 1 })

            // const api_uri = import.meta.env.VITE_API_URL

            // axios.get(`${api_uri}/user/${id}`)
            // .then(res => {

            //     context.commit('setUserLoaded', true)
            //     context.commit('setUser', res.data)

            // }).catch(err=> {
            //     console.log("err===========", err)
            //     this.auth = false;
            //     document.cookie = 'sso_token=; Max-Age=-99999999;';
            //     localStorage.removeItem('token');
            //     localStorage.removeItem('userInfo');
            //     localStorage.clear();
            //     delete axios.defaults.headers.common['Authorization'];
            //     document.getElementById("logoutform").submit();
            //     return;
            // })
        }
    }
})

export default store