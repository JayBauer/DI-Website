<template lang="pug">
  div.card-block
      div(:class="`card-block__image card-block__image--${color}`")
        img(:src="'/img/' + src" :alt="alt")
      div.card-block__text
        div
          slot
</template>

<script>
  export default {
    name: 'Card',
    props: [ 'color', 'src', 'alt' ]
  }
</script>

<style lang="postcss">
</style>
