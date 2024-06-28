import axios from 'axios';
import  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// window._ = require('lodash');

try {
   
    window.$ = window.jQuery = require('jquery');
   

} catch (e) {}


import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.bundle.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/js/adminlte.min.js';
// import '../assets/js/demo.js'
import '../assets/js/script'