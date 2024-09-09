<template>
    <div class="form-group" :class="setCols(this.cols)">
        <label>{{label}}<span class="formRequired">{{formRequired}}</span></label>
        <input 
        :type="type" 
        class="form-control" 
        :placeholder="placeholder" 
        @input="$emit('update:modelValue', $event.target.value)"
        >
        <small class="text-danger">{{formAlert}}</small>
    </div>
</template>

<script>
export default {

    props: {
        cols : {
            type : String,
            default: '6'
        },
        placeholder : {
            type : String,
            default: 'Enter Name'
        },
        label : {
            type : String,
            default: 'Name'
        },
        isRequired : {
            type : Boolean,
            default : true
        },
        modelValue : {
            type : String,
            default : ''
        },
        type : {
            type : String,
            default : "text"
        }
    },
    data() {
        return {
            formRequired : "*",
            formAlert : ''
        }
    },
    setup() {
        
    },
    methods: {
        setCols(i) {
            if (i) return `col-${i}`
            return "col-6"
        },
        setError(str) {
            // console.log('setError' ,i)
            this.formAlert = str
        }
    },
    mounted() {
        
        if (this.isRequired === false) this.formRequired = ""
    }
}

</script>