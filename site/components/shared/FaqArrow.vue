<template lang="pug">
  div.svg-wrapper.faq-arrow
    svg(width="43" height="43" viewBox="0 0 76.42 81.46")
      g(:class="isOpen ? 'open' : 'closed'")
        path.path(:style="`stroke: ${arrowColor}`" d="M17.64,11.52A37.26,37.26,0,0,1,73.35,22.79")
        path.path(:style="`stroke: ${arrowColor}`" d="M73.36,58.65A37.22,37.22,0,1,1,8.11,22.81")
        polygon.arrow(:style="'fill: ' + arrowColor + ';'" points="40.68 56.87 58.73 32.99 22.63 32.99 40.68 56.87")
</template>

<script>
  export default {
    props: {
      color: {
        default: 'blue',
        type: String
      },
      isOpen: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      arrowColor() {
        switch(this.color) {
          case 'blue': return '#1d5480'
          case 'orange': return '#f68938'
          case 'yellow': return '#f8ca6b'
          case 'light-blue': return '#4fafe2'
          case 'purple': return '#7b89a9'
          case 'red': return '#f37e6a'
        }
      },
      hidden() {
        return this.isOpen ? '0' : '1'
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import "global/variables";

  .faq-arrow {
    @media (--for-phone) {
      svg {
        width: 20px !important;
        height: 20px !important;
      }
    }
    g {
      transform-origin: 40.7px 40.81px;
      &.open {
        animation: spinLeft 1s ease-in-out;
        .path {
          &:nth-of-type(1) {
            animation: drawIn 1s ease-in-out;
          }
          &:nth-of-type(2) {
            animation: drawIn 1s ease-in-out;
          }
        }
        .arrow {
          transform-origin: 40.7px 40.81px;
          animation: spinHalfLeft 1s ease-in-out forwards;
        }
      }
      &.closed {
        animation: spinRight 1s ease-in-out;
        .path {
          &:nth-of-type(1) {
            animation: drawOut 1s ease-in-out;
          }
          &:nth-of-type(2) {
            animation: drawOut 1s ease-in-out;
            animation-fill-mode: forwards;
          }
        }
        .arrow {
          transform-origin: 40.7px 40.81px;
          animation: spinHalfRight 1s ease-in-out forwards;
        }
      }
    }
    .path {
      fill: none;
      stroke-width: 7px;
      stroke-miterlimit: 10;
      &:nth-of-type(1) {
        stroke-dasharray: 70;
        stroke-dashoffset: 0;
      }
      &:nth-of-type(2) {
        stroke-dasharray: 120;
        stroke-dashoffset: 0;
      }
    }
  }

  @keyframes drawIn {
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
  @keyframes drawOut {
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
  @keyframes spinRight {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  @keyframes spinHalfLeft {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-180deg);
    }
  }
  @keyframes spinHalfRight {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(0);
    }
  }

</style>
