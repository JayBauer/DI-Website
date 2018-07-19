<template lang='pug'>
  div#body-parts
    h3 What body part or parts need to be scanned?
    h4 Check multiple body parts if applicable, multiple body part discounts will apply.

    div.body-parts__form
      div.body-parts__brain.form-group
        h5 Brain
        div.form-element.form-element--checkbox(v-for="(part, index) in $store.getters.bodyParts" v-if="part.type == 'brain'")
          input(type="checkbox" :id="part.id" :value="part" :key="part.id" v-model="part.selected")
          label(:for="part.id") {{ part.name }}

      div.body-parts__spine.form-group
        h5 Spine
        div.form-element.form-element--checkbox(v-for="(part, index) in $store.getters.bodyParts" v-if="part.type == 'spine'")
          input(type="checkbox" :id="part.id" :value="part" :key="part.id" v-model="part.selected")
          label(:for="part.id") {{ part.name }}

      div.body-part__body.form-group
        h5 Body
        div.form-element.form-element--checkbox(v-for="(part, index) in $store.getters.bodyParts" v-if="part.type == 'body'")
          input(type="checkbox" :id="part.id" :value="part" :key="part.id" v-model="part.selected")
          label(:for="part.id") {{ part.name }}

      div.body-part__extremities.form-group
        h5 Extremities or Joints
        div.form-element.form-element--checkbox(v-for="(part, index) in $store.getters.bodyParts" v-if="part.type == 'extremities'")
          input(type="checkbox" :id="part.id" :value="part" :key="part.id" v-model="part.selected")
          label(:for="part.id") {{ part.name }}

      quote-box

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
