<template lang="pug">
  transition(name="expand" :css="false" v-on:before-enter="beforeEnter" v-on:enter="enter")
    div.question-block
      input(:id="id" type='radio' @click="open = !open")
      div.question-block__title
        label(:for="id")
          slot(name="title")
          FaqArrow(:color="color" :isOpen="open")
      div.question-block__answer(v-if="open")
        slot(name="answer")
</template>

<script>
  import FaqArrow from '~/components/shared/FaqArrow'

  export default {
    name: 'Question',
    props: [ 'id', 'color' ],
    data: () => ({
      open: false
    }),
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0
        el.style.transform = 'translateY(100vh)'
      },
      enter(el, done) {
        var delay = 500
        setTimeout(function () {
          el.style.opacity = 1
          el.style.transform = 'translateY(0)'
        }, delay)
      }
      // beforeEnter (el) {
      //   // Setup clone
      //   var clone = el.cloneNode(true), h
      //   clone.style.width = el.style.width
      //   clone.style.visibility = 'hidden'
      //   clone.style.removeProperty('display')
      //   // if inner animation (might be undesired)
      //   var desc = clone.querySelectorAll("*");
      //   [].forEach.call(desc, function (item) {
      //     // remove possible inline styles of display(=none)
      //     item.style.removeProperty('display')
      //   });
      //   // get clone height
      //   el.parentNode.appendChild(clone)
      //   h = clone.clientHeight
      //   clone.remove()
      //   // Force animation instead of simple "setting a height"
      //   el.style.height = "0px"
      //   setTimeout(() => el.style.height = h + "px", 1)
      // },
      // afterEnter (el) {
      //   el.style.removeProperty('height')
      // },
      // beforeLeave (el) {
      //   el.style.height = el.clientHeight + "px"
      //   setTimeout(() => el.style.height = "0px", 1)
      // },
      // afterLeave (el) {
      //   el.style.removeProperty('height')
      // }
    },
    components: {
      FaqArrow
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  .question-block {
    flex: 1;
    margin: 15px *;
    background-color: $white;
    input {
      display: none;
      &:checked ~ .question-block__answer {
        max-height: 800px;
      }
    }
    &__title {
      lost-flex-container: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      label {
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        padding: 15px 30px;
        color: $blue;
        cursor: pointer;
        h4 {
          padding: * 20px * *;
          text-align: left;
        }
      }
    }
    &__answer {
      max-height: 0;
      overflow: hidden;
      p {
        font-family: "Muli", sans-serif;
        padding: 15px 30px 30px;
      }
    }
    @media (--for-tablet-land-up) {
      max-width: 600px;
    }
    @media (--for-phone) {
      &__answer {
        p {
          font-size: 12px/14px;
        }
      }
    }
  }
</style>
