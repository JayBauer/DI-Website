<template lang='pug'>
  button(:id="id" type="submit" :class="classes")
    svg(height="60" width="100%" xmlns="http://www.w3.org/2000/svg")
      rect.shape(height="60" width="100%")
    p {{ text }}
</template>

<script>
  export default {
    name: 'Button',
    props: [ 'id', 'classes', 'text' ],
  }
</script>

<style lang="postcss">
@import '../../assets/css/global/variables';

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
    stroke-width: 10px;
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

  border: 3px / solid / $orange;
  p {
    font-size: 14px/14px;
  }
}

.btn-big {
  @extend %btn;

  p {
    font-size: 20px/20px;
  }
  &.small-text {
    p {
      font-size: 16px;
    }
  }
}

</style>
