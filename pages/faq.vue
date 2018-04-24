<template lang="pug">
div
  main-header
  section#questions.faq-page
    h1 Frequently Asked Questions
    div.question-blocks
      div.question-blocks--left
        Question(v-for="question, index in questions" :key="question.id" :id="question.id")
          h4(slot="title") {{ question.title }}
          p(slot="answer") {{ question.answer }}
      div.question-blocks__divider
      div.question-blocks--right
  how-it-works.faq-page
  book-now.faq-page
</template>

<script>
  import MainHeader from '~/components/MainHeader'
  import Question from '~/components/main/Question'
  import HowItWorks from '~/components/main/HowItWorks'
  import BookNow from '~/components/main/BookNow'

  export default {
    name: 'FAQ',
    data: () => ({
      questions: [
        {
          id: 'test',
          title: 'Test Title',
          answer: 'Answer?'
        },
        {
          id: 'question-1',
          title: 'What is the MRI scanner comprised of?',
          answer: 'Magnetic Resonance Imaging, commonly called MRI, is a non-invasive, painless procedure that produces very detailed pictures of soft body tissue and organs without using ionizing radiation, as with other diagnostic procedures such as X-ray and Computed Tomography (CT). Using a large magnet, radio waves and complex computer and software technology, MRI scans the patient\'s body and produces two or three-dimensional images of body tissues. MRI is important as both a screening and diagnostic tool due to its ability to detect many cardiovascular, neurological, oncological and musculoskeletal diseases/injuries earlier and more accurately than other modalities.'
        }
      ]
    }),
    components: {
      MainHeader,
      Question,
      HowItWorks,
      BookNow
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
            transform: translateY(36px);
          }
        }
      }
    }
  }
</style>
