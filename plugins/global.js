import Vue from 'vue'

import VueSimpleSVG from 'vue-simple-svg'
Vue.use(VueSimpleSVG)

import ScrollView from 'vue-scrollview'
Vue.use(ScrollView)

import TextInput from '~/components/shared/TextInput'
import Button from '~/components/shared/Button'
import Radio from '~/components/shared/Radio'
import CustomSvg from '~/components/shared/CustomSvg'
import NavButtons from '~/components/shared/NavButtons'
Vue.component('TextInput', TextInput)
Vue.component('Button', Button)
Vue.component('RadioButton', Radio)
Vue.component('CustomSvg', CustomSvg)
Vue.component('NavButtons', NavButtons)

Vue.directive('scrolled', {
  inViewport (element) {
    var rect = element.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight)
  },

  bind(element, binding) {
    element.classList.add('before-enter')
    element.onScroll = () => {
      if (binding.def.inViewport(element)) {
        element.classList.add('enter')
        element.classList.remove('before-enter')
        binding.def.unbind(element, binding)
      }
    }
    document.addEventListener('scroll', element.onScroll)
  },

  inserted(element, binding) {
    element.onScroll()
  },

  unbind(element, binding) {
    document.removeEventListener('scroll', element.onScroll)
    delete el.onScroll
  }
})
