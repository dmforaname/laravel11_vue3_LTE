<template>
    <div class="card fat">
        <div class="card-body">
            <h4 class="card-title">Login</h4>
            <div class="alert alert-danger" role="alert" v-if="this.formAlert">
                <b>Login Failed:</b> Incorrect Email or password
            </div>
            <form>
                <div class="form-group">
                    <label for="email">E-Mail<span class="text-color-red">* </span> 
                        <small v-if="this.invalidEmail" class="text-color-red">Email is invalid</small>
                    </label>
                    <input :class="this.err.email" type="email" class="form-control" name="email" id="email"
                        placeholder="name@example.com" v-model="v$.form.email.$model" required @input="inputFormEmail()"
                        autofocus
                        :readonly="formIsReadOnly">
                </div>

                <div class="form-group">
                    <label for="password">Password<span class="text-color-red">* </span>
                        <small v-if="this.invalidPassword" class="text-color-red">Password is required</small>
                        <!-- <a href="forgot.html" class="float-right">
                            Forgot Password?
                        </a> -->
                    </label>
                    <input :class="this.err.password" type="password" class="form-control" name="password" id="password" value=""
                        v-model="v$.form.password.$model" data-eye :readonly="formIsReadOnly">
                </div>

                <div class="form-group">
                    <div class="custom-checkbox custom-control">
                        <!-- <input type="checkbox" name="remember" id="remember" class="custom-control-input"> -->
                        <input class="custom-control-input" type="checkbox" v-model="form.remember_me" value="1"
                            name="remember_me" id="remember_me">
                        <label for="remember" class="custom-control-label">
                            <small>
                                <!-- Keep me logged in for 30 days -->
                                Trust this device for 30 days
                            </small>
                        </label>
                    </div>
                </div>

                <div class="form-group m-0" v-if="hideButtonLogin===false">
                    <button class="btn bsb-btn-xl btn-primary"  type="button" @click="addData()">Login</button>
                </div>
                <div class="spinner-border text-primary" style="margin-left: 3%;" role="status"  v-if="hideButtonLogin===true">
                    <span class="sr-only">Loading...</span>
                </div>

                <!-- <div class="mt-4 text-center">
                    Don't have an account? <a href="register.html">Create One</a>
                </div> -->
            </form>
        </div>
    </div>
</template>


<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import script from '../js/script'

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    components: {

    },
    data() {
        return {
            err: {
                email: '',
                password:''
            },
            form: {
                email: '',
                password: '',
                remember_me: 0
            },
            formAlert:false,
            invalidEmail:false,
            invalidPassword:false,
            api_uri : import.meta.env.VITE_API_URL,
            hideButtonLogin:false,
            formIsReadOnly:false
        };
    },
    validations() {
        return {
            form: {
                email: {
                    required,
                    email
                },
                password: {
                    required
                }
            },
        }
    },
    mounted() {
        // document.title = (this.companyTitle === '') ? this.pageTitle : this.pageTitle + ' - ' + this.companyTitle
        // console.log("App Mounted");
        document.body.classList.add('my-login-page')
    },
    methods: {
        addData() {

            this.invalidEmail = false
            this.invalidPassword = false
            this.v$.form.$touch
            // console.log("email : " + this.v$.form.email.$invalid)

            this.err.email = (this.v$.form.email.$invalid) ? "form-validation-red" : ""

            if (this.v$.form.email.$invalid) {
                this.invalidEmail = true
            }

            this.err.password = (this.v$.form.password.$invalid) ? "form-validation-red" : ""

            if (this.v$.form.password.$invalid) {
                this.invalidPassword = true
            }
            
            if (this.v$.form.$invalid) return false

            let email = this.form.email
            let password = this.form.password
            let remember_me = this.form.remember_me

            this.hideButtonLogin = true
            this.formIsReadOnly = true
            axios.post(this.api_uri + '/login', {

                email: email,
                password: password,
                remember_me: remember_me
            }).then(res => {

                let auth = res.data.data
                let redirectUrl = `/loggedin?token=${auth['token']}&token_ttl=${auth['token_ttl']}&keep_login=${auth['keep_login']}`
                
                if (this.$route.query.url) {                   
                    if (script.decryptText(this.$route.query.url) !== "") redirectUrl += `&url=${script.decryptText(this.$route.query.url)}` 
                }
                    
                window.location.href = redirectUrl

            }).catch(err => {

                this.formAlert=true
                // let codeErr = err.response.status
                // let newErr = (codeErr === 422) ? err.response.data.errors : err.response.data
                // console.log(newErr)
                this.hideButtonLogin = false
                this.formIsReadOnly = false
            })

            this.v$.form.$reset()


        },
        inputFormEmail() {

            // this.err.email = (this.v$.form.email.$dirty) ? "" : "form-validation-red"

            // console.log("inputFormEmail : " +this.v$.form.email.$dirty)

            // this.v$.form.email.$errors.forEach(items => {
            //   console.log(items)
            // })
        }
    }
}
</script>