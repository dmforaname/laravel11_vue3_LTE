<template>
    <div class="form-group" :class="setCols(this.cols)">
        <label>{{ label }} <span class="formRequired">{{ formRequired }}</span></label>
        <input 
        v-bind="$attrs"
        type="text" 
        class="form-control" 
        :placeholder="placeholder" 
        @input="$emit('update:modelValue', $event.target.value)"
        v-on:update:modelValue="myMethodForTheEvent"
        :value="modelValue"
        >
        <small class="text-danger">{{ formAlert }}</small>
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
            default: ''
        },
        label : {
            type : String,
            default: ''
        },
        isRequired : {
            type : Boolean,
            default : true
        },
        modelValue : {
            type : String,
            default : ''
        },
        formAlert : {
            type : String,
            default : ''
        }
    },
    data() {
        return {
            formRequired : "*",
        }
    },

    setup(props) {
        watch(() => props.modelValue, (newValue) => {
            console.log(newValue)
      })
    },
    methods: {
        setCols(i) {
            if (i) return `col-${i}`
            return "col-6"
        },
        myMethodForTheEvent() {
            console.log('test')
        }
    },
    mounted() {
        
        if (this.isRequired === false) this.formRequired = ""
    },
    watch: {

        modelValue: function(val) {
            console.log('!!! model value changed ', val);
        },
    }
}

</script>