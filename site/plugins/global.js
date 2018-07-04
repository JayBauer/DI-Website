import Vue from 'vue'

import Vuetify from 'vuetify'
import VueSimpleSVG from 'vue-simple-svg'
import ScrollView from 'vue-scrollview'

import Preloader from '~/components/shared/Preloader'
import TextInput from '~/components/shared/TextInput'
import Button from '~/components/shared/Button'
import Radio from '~/components/shared/Radio'
import CustomSvg from '~/components/shared/CustomSvg'
import NavButtons from '~/components/shared/NavButtons'

Vue.use(Vuetify)
Vue.use(VueSimpleSVG)
Vue.use(ScrollView)

Vue.component('Preloader', Preloader)
Vue.component('TextInput', TextInput)
Vue.component('Button', Button)
Vue.component('RadioButton', Radio)
Vue.component('CustomSvg', CustomSvg)
Vue.component('NavButtons', NavButtons)

Vue.directive('scrolled', {
  inViewport(el, offset) {
    var rect = el.getBoundingClientRect()
    var modified = offset || 0
    return !((rect.top + modified) > window.innerHeight)
  },

  bind(el, binding) {
    el.classList.add('before-scroll')
    el.onScroll = () => {
      if(binding.def.inViewport(el, binding.value)) {
        el.classList.add('after-scroll')
        el.classList.remove('before-scroll')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.onScroll)
  },

  inserted(el, binding) {
    el.onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.onScroll)
    delete el.onScroll
  }
})

import { SAVE_BOOKING } from '~/mutations'
Vue.mixin({
  methods: {
    saveBooking() {
      const { bookingFor, ontarioRes, bodyParts, waiver, referral, payment, currentComponent } = this.$store.getters.store
      let imageUploaded = null

      var saveBookingMutation = () => this.$apollo.mutate({
        mutation: SAVE_BOOKING,
        variables: {
          bookingNumber: this.$route.params.id,
          user: this.$store.getters.currentUser,
          bookingFor,
          ontarioRes,
          bodyParts: JSON.parse(JSON.stringify(bodyParts)),
          waiver: {
            party: { set: waiver.party },
            otherParty: JSON.parse(JSON.stringify(waiver.otherParty)),
            agree: waiver.agree,
            firstName: waiver.firstName,
            lastName: waiver.lastName,
            date: waiver.date
          },
          referral: {
            pay: referral.pay,
            upload: imageUploaded
          },
          payment,
          progress: currentComponent
        }
      }).then(res => {
        console.log('Successful booking save')
        this.$router.push({ name: 'account-order-history' })
      }).catch(err => {
        console.error(err)
      })

      if(!referral.pay && referral.upload) {
        this.$apollo.mutate({
          mutation: UPLOAD_FILE,
          variables: {
            file: referral.upload,
            path: '/uploads/'
          }
        }).then(data => {
          console.log('UPLOAD: ', data.data.uploadFile.url)
          imageUploaded = { connect: { url: data.data.uploadFile.url } }
          saveBookingMutation()
        }).catch(err => {
          console.error(err)
        })
      } else {
        saveBookingMutation()
      }
    }
  }
})
