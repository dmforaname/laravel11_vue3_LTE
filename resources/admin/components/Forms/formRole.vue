<template>
    <div class="form-group" :class="setCols(this.cols)">
        <label>{{ setFormTitle(this.title) }}</label>
        <select class="form-control" :id="this.formName" :name="this.formName" required>
            <option value="" disabled selected>{{ setPlaceholder(this.placeholder) }}</option>
            <option v-for="option in optionsSelect" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <small class="text-danger"></small>
    </div>
</template>

<script>
export default {

    props: [
        'cols',
        'placeholder',
        'value',
        'title'
    ],
    data() {
        return {
            formTitle: "Role",
            formPlaceholder: "Select your option",
            formValue: "",
            formName: "role_id",
            optionsSelect: []
        }
    },
    setup(props) {

        // console.log(props.cols)
    },
    methods: {
        setCols(i) {
            if (i) return `col-${i}`
            return "col-6"
        },
        setPlaceholder(s) {
            return s ?? this.formPlaceholder
        },
        setValue(s) {
            return s ?? this.formValue
        },
        setFormTitle(s) {
            return s ?? this.formTitle
        },
        getRoles(){
            
            axios.get('/api/roles')
                .then((response) => {

                    const options = response.data.data.map(item => {

                        const container = {}

                        container.value = item
                        container.text = item

                        return container
                    })

                    this.optionsSelect = options

                })
                .catch( resonse => {
                    console.log('error');
                })
        },
    },
    mounted() {
        this.getRoles()
    }
}
</script>