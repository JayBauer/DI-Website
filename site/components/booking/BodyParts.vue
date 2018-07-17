<template lang='pug'>
  div#body-parts
    h3 What body part or parts need to be scanned?
    h4 Check multiple body parts if applicable, multiple body part discounts will apply.
    p {{ $store.getters.selectedParts }}
    p {{ $store.getters.discount }}

    div.body-parts__form
      div.body-parts__brain.form-group
        h5 Brain
        div.form-element.form-element--checkbox(v-for="(options, index) in $store.getters.bodyParts.brain")
          input(type="checkbox" :id="options.id" :value="options" :key="options.id" v-model="options.selected")
          label(:for="options.id") {{ options.name }}

      div.body-parts__brain.form-group
        h5 Spine
        div.form-element.form-element--checkbox(v-for="(options, index) in $store.getters.bodyParts.spine")
          input(type="checkbox" :id="options.id" :value="options" :key="options.id" v-model="options.selected")
          label(:for="options.id") {{ options.name }}

      div.body-parts__body.form-group
        h5 Body
        div.form-element.form-element--checkbox(v-for="(options, index) in $store.getters.bodyParts.body")
          input(type="checkbox" :id="options.id" :value="options" :key="options.id" v-model="options.selected")
          label(:for="options.id") {{ options.name }}

      div.body-parts__extremities.form-group
        h5 Extremities or Joints
        div.form-element.form-element--checkbox(v-for="(options, index) in $store.getters.bodyParts.extremities")
          input(type="checkbox" :id="options.id" :value="options" :key="options.id" v-model="options.selected")
          label(:for="options.id") {{ options.name }}

      quote-box(:price="$store.getters.totalPrice" :discount="0")

    nav-buttons(next="Waiver" previous="Resident" @clicked="navigate")
</template>

<script>
  import Quote from '~/components/booking/Quote'

  export default {
    name: 'BodyParts',
    components: {
      'quote-box': Quote
    },
    methods: {
      updateStore(part) {
        this.$store.dispatch('updateBodyParts', part)
      },
      navigate(component) {
        this.$store.dispatch('updateComponent', component)
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  #body-parts {
    .form-group {
      lost-center: 1200px;
      padding: 30px *;
      h5 {
        width: 100%;
        font-weight: extrabold;
        color: $blue;
        text-transform: uppercase;
        text-align: center;
        padding: * * 15px *;
        margin: * * 15px *;
        border-bottom: 1px solid $blue;
      }
      .form-element--checkbox {
        lost-column: 1/1 0 0 0;
        @media (--for-tablet-port-up) {
          lost-column: 1/2 0 0 0;
        }
      }
      @media (--for-desktop-down) {
        padding: * 280px * *;
      }
      @media (--for-tablet-land-down) {
        padding: * 30px * *;
      }
    }
  }
</style>
