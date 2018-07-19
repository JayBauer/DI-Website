<template lang="pug">
  div.booking-nav-btns
    nav
      button(v-if="previous" @click="onClick(previous)")
        custom-svg(src="back-btn.svg" color="#F68938" width="86" height="84")
        h4 Back
      button(v-if="next" @click="onClick(next)" :disabled="disabled")
        custom-svg(src="next-btn.svg" color="#F68938" width="86" height="85")
        h4 Next
</template>
<script>
  export default {
    name: 'NavButtons',
    props: {
      next: {
        type: String,
        required: false,
        default: ''
      },
      previous: {
        type: String,
        required: false,
        default: ''
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      onClick(e) {
        this.$emit('clicked', e)
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  div.booking-nav-btns {
    background-color: $white;
    padding: 50px * * *;
    nav {
      lost-center: 300px;
      justify-content: space-around;
      button {
        outline: none;
        h4 {
          font-size: 20px;
          font-weight: bold;
          color: $blue;
          text-transform: uppercase;
          padding: 10px * * *;
        }
        &:disabled {
          h4 {
            color: $lighter-gray;
          }
          .simple-svg {
            fill: $lighter-gray !important;
            stroke: $lighter-gray !important;
          }
        }
      }
    }
  }
</style>
