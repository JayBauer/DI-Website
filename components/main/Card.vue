<template lang="pug">
  div.card-block
      div(:class="`card-block__image card-block__image--${color}`")
        //- img(:src="'/img/icons/' + src" :alt="alt")
        custom-svg(:src="src" color="#FFF" :width="width" :height="height")
      div.card-block__text
        div
          slot
</template>

<script>
  import CustomSvg from '~/components/shared/CustomSvg'
  export default {
    name: 'Card',
    props: [ 'color', 'src', 'alt', 'width', 'height' ],
    components: {
      CustomSvg
    }
  }
</script>
