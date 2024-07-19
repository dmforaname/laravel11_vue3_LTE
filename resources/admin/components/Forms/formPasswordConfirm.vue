<template>
    <div class="form-group" :class="setCols(this.cols)">
        <label>{{ setFormTitle(this.title) }}</label>
        <input :type="this.formName" class="form-control" :id="this.formName" :name="this.formName" :value="setValue(this.value)" :placeholder="setPlaceholder(this.placeholder)" required minlength="2">
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
            formTitle : "Confirmation Password",
            formPlaceholder : "Enter Confirmation Password ",
            formValue : "",
            formName : "password_confirmation"
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
        }
    },
}

</script>