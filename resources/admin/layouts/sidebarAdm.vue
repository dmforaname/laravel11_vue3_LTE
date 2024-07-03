<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="/admin" class="brand-link">
            <img src="../assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user (optional) -->
            <!-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
            <img src="../assets/img/user3-128x128.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
        </div>
    </div> -->

            <!-- SidebarSearch Form -->
            <!-- <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
                <button class="btn btn-sidebar">
                    <i class="fas fa-search fa-fw"></i>
                </button>
            </div>
        </div>
    </div> -->

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                    <li class="nav-item">
                        <a 
                        @click.prevent="goto(routes.index)" 
                        class="nav-link" 
                        aria-current="page" 
                        
                        :href="routes.index"
                        >
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                        </a>
                        <!-- <a href="#" class="nav-link">
                    
                    </a> -->

                    </li>
                    
                    <li class="nav-header">EXAMPLES</li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fa-plus-square"></i>
                            <p>
                                Extras
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a @click.prevent="goto(routes.blank)" 
                                class="nav-link" 
                                aria-current="page" 
                                :href="routes.blank"
                                
                                >
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Blank Page</p>   
                                </a>
                            </li>

                        </ul>
                    </li>
                    
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>

        <!-- /.sidebar -->
    </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    components: {

    },
    data() {
        return {

            routes: {
                index: '/admin',
                logout: '/admin/logout',
                blank: '/admin/sample'
            },
            currentUrl:'',
            baseUrl: import.meta.env.VITE_APP_URL,
            api_uri : import.meta.env.VITE_API_URL
            
        };
    },
    mounted() {
        
        this.loadJqueryModule(window.location.href)

        this.getCurUrl()
        document.title = 'Dashboard | KreazyId'
    },
    methods: {
        goto(to) {

            if (this.$route.path === to){
                this.emitter.emit('reloadPage', to)
            }
            else {

                
                this.$router.push(to).then(() => {

                    this.loadJqueryModule(this.baseUrl + to)                    
                })                
            }
            
        },
        logout() {

            this.arrLocalStorage.forEach(item => localStorage.removeItem(item))
            localStorage.clear();
            axios.post(`${this.api_uri}/logout`).then(() => location.href = '/login').catch(err => {
                location.href = '/login'
            })
        },
        setActiveMenu(r) {

            // console.log('setActiveMenu : '+r)
            return 'active'
        },
        getCurUrl() {
            this.currentUrl = window.location.pathname;
            // console.log(`Current URL => ${this.currentUrl}`);
        },
        loadJqueryModule(x) {

            async function j() { 

                $('.nav-link').removeClass('active');
                return true
            }

            j().then(i => {
                // for sidebar menu entirely but not cover treeview
                $('ul.nav-sidebar a').filter(function () {

                    return this.href == x;
                }).addClass('active');

                // for treeview
                $('ul.nav-treeview a').filter(function () {
                    return this.href == x;
                }).parentsUntil(".nav-sidebar > .nav-treeview").addClass('menu-open').prev('a').addClass('active');
                // end jquery
            })
        }
    },
    computed: {
        ...mapState(['user', 'userLoaded']),
        
        checkIsLoaded() {

            if (this.userLoaded) {

                this.loadJqueryModule(window.location.href)
                this.getCurUrl()

                return true
            }

            return false            
        }
    
    }
}

</script>