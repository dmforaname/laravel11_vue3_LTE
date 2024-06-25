<template>
    <section class="h-100">
        <div class="container h-100" id="app">
            <div class="row justify-content-md-center h-100">
                <div class="card-wrapper">
                    <div class="brand">
                        <img src="../assets/img/logo.png" alt="logo">
                    </div>
                    <router-view></router-view>
                    <!-- <div class="footer">
                        Copyright &copy; 2017 &mdash; Your Company
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>