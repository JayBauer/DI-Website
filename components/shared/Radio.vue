<template lang="pug">
  label
    input(type="radio" :name="name" :value="val" @change="updateInput")
    span {{ label }}
</template>

<script>
  export default {
    name: 'RadioButton',
    props: ['name', 'val', 'label'],
    methods: {
      updateInput(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
