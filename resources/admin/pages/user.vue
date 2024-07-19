<template>
    <section class="content">
        <div class="card collapsed-card" v-if="userLoaded" ref="collapsedCard">
            <div class="card-header btn" data-card-widget="collapse" id="collapsedCard">
                <h3 class="card-title">{{ addTitle }}</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <form method="POST" enctype="multipart/form-data" id="formInsert" action="javascript:void(0)"> 
                    <div class="form-group col-12">
                        <div class="row">
                            <formName cols="4"/>
                            <FormEmail cols="4" />
                            <FormRole cols="4"/>
                        </div>
                        <div class="row">
                            <FormPassword cols="4"/>
                            <FormPasswordConfirm cols="4"/>
                        </div>
                    </div>
                    <div class="form-group col-6">
                    <button 
                    type="button" 
                    ref="submitButton"
                    class="btn btn-primary btn-flat"
                    @click="addData()"
                    >Submit</button>
                </div>
                </form>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->

        <!-- Default box -->
        <div class="card" v-if="userLoaded">
            <div class="card-header">
                <h3 class="card-title">{{ tableTitle }}</h3>
            </div>
            <div class="card-body">
                <DataTable 
                class="display table table-sm table-bordered table-hover table-striped" 
                :data="tableData" 
                :columns="columns"
                :options="tableOption"
                :ajax="ajaxTable"
                >
                    <thead class="thead-dark">
                        <tr>
                            <th width="5%">#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>
    <!-- /.content -->
</template>

<script>
import { mapState } from 'vuex'
import formName from '../components/Forms/formName.vue'
import FormPassword from '../components/Forms/formPassword.vue'
import FormRole from '../components/Forms/formRole.vue'
import FormEmail from '../components/Forms/formEmail.vue'
import FormPasswordConfirm from '../components/Forms/formPasswordConfirm.vue'

export default {
    components:{
    formName,
    FormPassword,
    FormRole,
    FormEmail,
    FormPasswordConfirm
},
    data() {
        return {

            tableTitle: "Users List",
            addTitle: "Add User",
            tableData : [],
            columns : [
                { data: 'DT_RowIndex' },
                { data: 'name' },
                { data: 'email' },
                { data: 'roles' },
            ],
            tableOption : {
                    ordering: true,
                    paging: true,
                    lengthChange: false,
                    searching: true,
                    ordering: true,
                    info: true,
                    autoWidth: false,
                    responsive: true,
                    serverSide: true,
                    pagingType: 'simple_numbers'
                },
            ajaxTable : {
                url : '/api/users',
                headers :{
                    'Authorization': axios.defaults.headers.common['Authorization'],
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }
        }
    },

    mounted() {

        $("#overlay").fadeIn()
        document.title = this.$route.meta['title'] ?? `Kreazy Id`
        this.$nextTick(() => {
            $("#overlay").fadeOut()
        })
        
    },
    computed: {
        ...mapState(['user','userLoaded']),

        // isUser() {

        //     return this.user
        // }
    },
    methods: { 

        addData() {

            console.log('add Data')
        }
    }
}

</script>