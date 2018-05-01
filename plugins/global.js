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
