<template lang='pug'>
  button.btn-big(:id="id" type="submit")
    svg(height="60" width="100%" xmlns="http://www.w3.org/2000/svg")
      rect.shape(height="60" width="100%")
    p {{ text }}
</template>

<script>
  export default {
    name: 'Button',
    props: [ 'id', 'text' ],
  }
</script>

<style lang="postcss">
@import '../../assets/css/global/variables';

%btn {
  display: inline-block;
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
  }
}

.btn-small {
  @extend %btn;

  font-size: 14px/14px;
  border: 3px / solid / $orange;
}

.btn-big {
  @extend %btn;

  position: relative;
  p {
    font-size: 20px/20px;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
