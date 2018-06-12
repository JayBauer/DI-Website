<template lang="pug">
  div.card-block(v-scrolled:modify="200")
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

<style lang="postcss">
  @import "global/variables";

  @media (--for-desktop-up) {
    .card-blocks {
      &--left {
        .before-scroll {
          opacity: 0;
          transform: translateX(-100%);
        }
        .after-scroll {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
      }
      &--right {
        .before-scroll {
          opacity: 0;
          transform: translateX(100%);
        }
        .after-scroll {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
      }
    }
  }
</style>
