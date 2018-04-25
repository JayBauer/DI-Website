<template lang='pug'>
  nav
    custom-svg(src="head.svg" :color="iconColor" width="35" height="45")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="iconColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="shock.svg" :color="iconColor" width="42" height="44")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="iconColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="pencil.svg" :color="iconColor" width="37" height="46")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="iconColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="arrow.svg" :color="iconColor" width="37" height="45")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="iconColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="money.svg" :color="iconColor" width="56" height="34")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="iconColor" width="12" height="12")
    custom-svg(src="small-circle.svg" :color="circleColor" width="12" height="12")
    custom-svg(src="phone.svg" :color="iconColor" width="43" height="44")
</template>

<script>
  export default {
    name: 'BookingHeaderNav',
    data: () => ({
      iconColor: '#F68938',
      circleColor: '#FFF'
    })
  }
</script>

<style lang="postcss" scoped>
  @import 'global/variables';

  nav {
    lost-center: 600px;
    justify-content: space-between;
    align-items: center;
    padding: 50px * * *;
    button {
      outline: none;
    }
  }
</style>
