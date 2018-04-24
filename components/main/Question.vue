<template lang="pug">
  div.question-block
    input(:id="id" type='radio' @click="open = !open")
    div.question-block__title
      label(:for="id")
        slot(name="title")
        img(src="/img/faq-arrow.svg" alt="FAQ Arrow")
    div.question-block__answer(v-show="open")
      slot(name="answer")
</template>

<script>
  export default {
    name: 'Question',
    props: [ 'id' ],
    data: () => ({
      open: false
    })
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  .question-block {
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
      height: 100%;
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
