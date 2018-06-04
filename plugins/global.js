import Vue from 'vue'

import Vuetify from 'vuetify'
import VueSimpleSVG from 'vue-simple-svg'
import ScrollView from 'vue-scrollview'

import TextInput from '~/components/shared/TextInput'
import Button from '~/components/shared/Button'
import Radio from '~/components/shared/Radio'
import CustomSvg from '~/components/shared/CustomSvg'
import NavButtons from '~/components/shared/NavButtons'

Vue.use(Vuetify)
Vue.use(VueSimpleSVG)
Vue.use(ScrollView)

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
