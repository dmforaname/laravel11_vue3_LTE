import axios from 'axios';
import  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

try {
   
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js';
import '../assets/js/script'