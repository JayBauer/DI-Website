<template lang="pug">
  simple-svg(:filepath="'/img/icons/' + src" :fill="color" :stroke="color" :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`")
</template>

<script>
  export default {
    props: [ 'src', 'color', 'width', 'height' ]
  }
</script>
