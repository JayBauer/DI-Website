<template lang="pug">
  div.svg-wrapper.spinning-icon
    svg(:width="size" :height="size" viewBox="0 0 81.45 81.45")
      g(:style="'animation-delay: ' + animateStart")
        path.path(:style="`stroke: ${spinnerColor}`" d="M6.43,26.23A37.24,37.24,0,0,1,60.67,9.29")
        path.path(:style="`stroke: ${spinnerColor}`" d="M78,40.72a37.23,37.23,0,1,1-74.45,0")
        circle.circle(:style="`fill: ${spinnerColor}; `" cx="40.7" cy="40.81" r="13")
</template>

<script>
  export default {
    props: {
      size: {
        default: '33',
        type: String
      },
      color: {
        default: 'blue',
        type: String
      }
    },
    computed: {
      animateStart() {
        return Math.random() + 's'
      },
      spinnerColor() {
        switch(this.color) {
          case 'blue': return '#1d5480'
          case 'orange': return '#f68938'
          case 'yellow': return '#f8ca6b'
          case 'light-blue': return '#4fafe2'
          case 'purple': return '#7b89a9'
          case 'red': return '#f37e6a'
        }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import "global/variables";

  .spinning-icon {
    @media (--for-phone) {
      svg {
        width: 20px !important;
        height: 20px !important;
      }
    }
    g {
      animation: spinLeft 1s infinite ease-in-out;
      transform-origin: 40.7px 40.81px;
    }
    .path {
      fill: none;
      stroke-width: 7px;
      stroke-miterlimit: 10;
      &:nth-of-type(1) {
        stroke-dasharray: 70;
        stroke-dashoffset: 0;
        animation: draw 1s infinite ease-in-out;
      }
      &:nth-of-type(2) {
        stroke-dasharray: 120;
        stroke-dashoffset: 0;
        animation: draw 1s infinite ease-in-out;
      }
    }
  }

  @keyframes draw {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 120;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes spinLeft {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
