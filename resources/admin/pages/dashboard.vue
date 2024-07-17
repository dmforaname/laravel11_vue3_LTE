<template>
    <section class="content" v-if="isAdmin">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Title</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    <!-- <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                <i class="fas fa-times"></i>
            </button> -->
                </div>
            </div>
            <div class="card-body">
                Start creating your amazing application!
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                Footer
            </div>
            <!-- /.card-footer-->
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

        // console.log(JSON.stringify(this.user))

        console.log('dashboard')
        console.log(this.printUser())
        $("#overlay").fadeIn()

        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            $("#overlay").fadeOut()
        })
        // document.title = (this.companyTitle === '') ? this.pageTitle : this.pageTitle + ' - ' + this.companyTitle
        document.title =  this.$route.meta['title'] ?? `Kreazy Id`
    },
    computed: {
        ...mapState(['user', 'userLoaded']),

        isAdmin(){

            // console.log(JSON.stringify(this.user))

            const roles = ["superAdmin","admin"]
            const intersection = this.user.roles.filter(element => roles.includes(element))

            return (intersection.length > 0)??false
        }
    },
    methods: {

        printUser() {

            return this.user
        }
    },
}

</script>