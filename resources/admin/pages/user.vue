<template>
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{{ tableTitle }}</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
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

export default {

    data() {

        return {

            tableTitle: "Users List",
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
                    processing: true,
                    serverSide: true,
                },
            ajaxTable : {
                url : '/api/users',
                headers :{
                    'Authorization': 'Bearer '+localStorage.getItem('token'),
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
        ...mapState(['user']),

        isUser() {

            return this.user
        }
    }
}

</script>