<template lang='pug'>
  div#ontario-res
    h3 Are you a resident of Ontario?
    div.ontario-res__form.form-group
      div.form-element.form-element--radio
        input(id="resident_yes" type="radio" v-model="resident" value="YES")
        label(for="resident_yes") Yes
      div.form-element.form-element--radio
        input(id="resident_no" type="radio" v-model="resident" value="NO")
        label(for="resident_no") No

    nav-buttons(next="BodyParts" previous="BookingFor" @clicked="navigate" :disabled="resident == ''")
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Resident',
    computed: {
      resident: {
        get() {
          return this.$store.getters.ontarioRes
        },
        set(value) {
          this.$store.dispatch('updateResident', value)
        }
      }
    },
    methods: {
      navigate(component) {
        this.$store.dispatch('updateComponent', component)
      }
    }
  }
</script>
