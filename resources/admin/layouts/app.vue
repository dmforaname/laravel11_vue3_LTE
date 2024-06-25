<template>
  <!-- Navbar -->
  <NavbarAdm></NavbarAdm>
  <!-- /.navbar -->

  <SidebarAdm></SidebarAdm>

  <!-- Content Wrapper. Contains page content -->
  <Transition name="fade">
    <router-view></router-view>
  </Transition>
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

export default {
  components: {
    SidebarAdm,
    NavbarAdm,
    FooterAdm
  },
  data() {
    return {
      // pageTitle: 'Dashboard',
      // companyTitle : '',
    };
  },
  mounted() {
    // document.title = (this.companyTitle === '') ? this.pageTitle : this.pageTitle + ' - ' + this.companyTitle
    console.log("App Mounted");
  },
}
</script>