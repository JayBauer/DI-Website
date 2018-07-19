<template lang="pug">
div
  section#questions.faq-page
    h1 Frequently Asked Questions
    div.question-blocks
      div.question-blocks--left
        Question(v-for="question, index in leftQuestions" :key="'left-question-' + (index+1)" :id="'left-question-' + (index+1)" :color="question.color")
          h4(slot="title" v-html="question.title")
          span(slot="answer" v-html="question.answer")
      div.question-blocks__divider
      div.question-blocks--right
        Question(v-for="question, index in rightQuestions" :key="'right-question-' + (index+1)" :id="'right-question-' + (index+1)" :color="question.color")
          h4(slot="title" v-html="question.title")
          span(slot="answer" v-html="question.answer")
  how-it-works.faq-page
  book-now.faq-page
</template>

<script>
  import Question from '~/components/main/Question'
  import HowItWorks from '~/components/main/HowItWorks'
  import BookNow from '~/components/main/BookNow'

  import { questions } from '~/components/questions'

  export default {
    name: 'FAQ',
    components: {
      Question,
      HowItWorks,
      BookNow
    },
    data: () => ({
      questions
    }),
    computed: {
      leftQuestions() {
        let leftQuestions = []
        for (let i = 0; i < this.questions.length; i+=2) {
          leftQuestions.push(this.questions[i])
        }
        return leftQuestions
      },
      rightQuestions() {
        let rightQuestions = []
        for (let i = 1; i < this.questions.length; i+=2) {
          rightQuestions.push(this.questions[i])
        }
        return rightQuestions
      }
    },
    head() {
      return {
        title: 'FAQ'
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  section.faq-page {
    &#questions {
      background-color: $off-white;
      h1 {
        padding: * * 35px *;
      }
      .question-blocks {
        lost-center: 800px;
        ul {
          padding: * 25px;
          li {
            margin: * 25px;
            list-style-type: lower-roman;
          }
        }
        table {
          padding: 25px;
          margin: 25px;
          th {
            font-size: 18px;
            font-weight: bold;
            text-align: left;
            padding: * * 25px *;
          }
          tr {
            td {
              padding: 15px * * *;
              width: 50%;
              &:first-of-type {
                font-weight: bold;
              }
              ul {
                padding: 0;
                li {
                  margin: 0;
                  list-style-type: none;
                }
              }
            }
          }
        }
      }
      @media (--for-tablet-port-up) {
        padding: * 30px;
        h1 {
          padding: * * 50px *;
        }
      }
      @media (--for-tablet-land-up) {
        .question-blocks {
          lost-center: 1200px;
          position: relative;
          &--left {
            lost-column: 1/2 0 60px;
            transform: translateY(36px);
          }
          &__divider {
            position: absolute 0 * * 50%;
            transform: translateX(-50%);
            height: 100%;
            border: 0 2px 0 2px / solid / $white;
            border-radius: 5px;
          }
          &--right {
            lost-column: 1/2 0 60px;
          }
        }
      }
    }
  }
</style>
