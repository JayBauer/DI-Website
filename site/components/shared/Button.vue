<template lang='pug'>
  nuxt-link(:to="link" :id="id" :class="'btn-' + size")
    svg(:height="size == 'big' ? '60' : '40'" :width="size == 'big' ? '100%' : '100'" xmlns="http://www.w3.org/2000/svg")
      rect.shape(:height="size == 'big' ? '60' : '40'" :width="size == 'big' ? '100%' : '100'")
    p
      slot
      span {{ text }}
</template>

<script>
  export default {
    name: 'Button',
    props: {
      id: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: false,
        default: 'big'
      },
      text: {
        type: String,
        required: true
      },
      link: {
        type: Object,
        required: false,
        default: () => ({})
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  %btn {
    display: inline-block;
    position: relative;
    margin: 0 auto;
    max-width: 100%;
    color: $orange;
    rect {
      fill: transparent;
      stroke-dasharray: 320 75;
      stroke-dashoffset: -474;
      stroke: $orange;
      cursor: pointer;
      transition: all 0.7s;
    }
    &:hover rect {
      stroke-dashoffset: -844;
    }
    p {
      font-family: "Raleway", monospace;
      font-weight: extrabold;
      white-space: nowrap;
      text-transform: uppercase;
      pointer-events: none;
      position: absolute;
      top: calc(50% - 2px);
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .btn-small {
    @extend %btn;

    rect {
      stroke-dasharray: 360 75;
      stroke-width: 7px;
    }
    p {
      font-size: 14px/14px;
      svg + span {
        padding-left: 5px;
      }
      svg {
        font-size: 15px;
      }
    }
  }

  .btn-big {
    @extend %btn;

    rect {
      stroke-width: 10px;
    }
    p {
      font-size: 20px/20px;
      svg + span {
        padding-left: 15px;
      }
      svg {
        font-size: 20px;
      }
    }
    &.small-text {
      p {
        font-size: 16px;
      }
    }
  }
</style>
