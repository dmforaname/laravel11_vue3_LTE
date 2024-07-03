<template>
  <!-- Preloader -->
  <PreloaderAdm></PreloaderAdm>

  <!-- Navbar -->
  <NavbarAdm></NavbarAdm>
  <!-- /.navbar -->

  <SidebarAdm></SidebarAdm>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <BreadcrumbAdm></BreadcrumbAdm>

    <!-- Main content -->
    <router-view></router-view>
  </div>


  <!-- /.content-wrapper -->

  <FooterAdm></FooterAdm>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</template>

<script>
import SidebarAdm from './sidebarAdm.vue';
import NavbarAdm from './navbarAdm.vue';
import FooterAdm from './footerAdm.vue';
import PreloaderAdm from './preloaderAdm.vue';
import BreadcrumbAdm from './breadcrumbAdm.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SidebarAdm,
    NavbarAdm,
    FooterAdm,
    PreloaderAdm,
    BreadcrumbAdm
  },
  data() {
    return {
      // pageTitle: 'Dashboard',
      // companyTitle : '',
      userData : {}
    };
  },
  mounted() {
    // document.title = (this.companyTitle === '') ? this.pageTitle : this.pageTitle + ' - ' + this.companyTitle
    console.log("App Mounted");
    
  },
  computed: {
      
  },
  methods: { 


  }
}
</script>