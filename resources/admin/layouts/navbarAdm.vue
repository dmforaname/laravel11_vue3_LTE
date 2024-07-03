<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <!-- <li class="nav-item d-none d-sm-inline-block">
                <a href="../../index3.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">Contact</a>
            </li> -->
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <!-- Navbar Search -->


            <!-- Messages Dropdown Menu -->

            <!-- Notifications Dropdown Menu -->
            <li class="nav-item dropdown user user-menu">
                <div class="collapse navbar-collapse" id="navbar-list-4">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">

                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                                <img src="../assets/img/user3-128x128.jpg" class="user-image-1 img-circle elevation-2"
                                    alt="User Image">
                                <span class="hidden-xs">{{ $store.state.userName }}</span>
                            </a>
                            <!-- <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"> <img src="../assets/img/user3-128x128.jpg" class="user-image rounded-circle shadow" alt="User Image"> <span class="d-none d-md-inline">Alexander Pierce</span> </a> -->
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/admin">Dashboard</a>
                                <a class="dropdown-item" href="javascript:void(0)">Edit Profile</a>
                                <!-- <a class="dropdown-item" href="javascript:void(0)">Log Out</a> -->
                                <a 
                                @click.prevent="logout()" 
                                class="dropdown-item" 
                                :href=routes.logout
                                >Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                    <i class="fas fa-th-large"></i>
                </a>
            </li> -->

        </ul>
    </nav>
</template>

<script>


export default {

    data() {

        return {
            routes: {
                logout: '/admin/logout'
            },
            arrLocalStorage: this.storageList,
            api_uri : import.meta.env.VITE_API_URL
        }
    },
    methods: {
        logout() {

            this.arrLocalStorage.forEach(item => localStorage.removeItem(item))
            localStorage.clear();
            axios.post(`${this.api_uri}/logout`).then(() => location.href = '/login').catch(err => {
                location.href = '/login'
            })
        },
    }
}
</script>