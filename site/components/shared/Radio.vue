<template lang="pug">
  label
    input(type="radio" :name="name" :value="val" @change="updateInput")
    span {{ label }}
</template>

<script>
  export default {
    name: 'RadioButton',
    props: {
      name: {
        type: String,
        required: true,
      },
      val: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    },
    methods: {
      updateInput(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
