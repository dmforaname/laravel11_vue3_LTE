<template>
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Sample</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                Sample
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->

    </section>
    <!-- /.content -->
</template>

<script>

import { mapState } from 'vuex'

export default {

    data() {

        return {

            // pageTitle: 'Dashboard',
            // companyTitle : '',
        }

    },

    mounted() {

        // console.log(this.isUser)
        // document.title = (this.companyTitle === '') ? this.pageTitle : this.pageTitle + ' - ' + this.companyTitle
        document.title = (this.$route.meta['title']) ? `${this.$route.meta['title']} | Kreazy Id` : `Kreazy Id`
    },
    computed: {
        ...mapState(['user']),

        isUser() {
            
            return this.user
        }
    }
}

</script>