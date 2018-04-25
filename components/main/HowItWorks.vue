<template lang="pug">
  section#how-it-works.how-it-works
    h1 How It Works
    ul.how-it-works__list
      li.how-it-works__item(v-for="item, index in list")
        custom-svg(:src="item.src" color="#F68938" :width="item.width" :height="item.height" :viewbox="`0 0 ${item.width} ${item.height}`")
        h2 {{ index + 1 }}.
        div.how-it-works__item__content
          h2 {{ item.text }}
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
</template>

<script>
  export default {
    name: "HowItWorks",
    data: () => ({
      list: [
        { src: 'airplane.svg', text: 'Select Area to Be Scanned', width: '42', height: '42' },
        { src: 'money.svg', text: 'See Quote', width: '54', height: '32' },
        { src: 'pencil.svg', text: 'Sign Third Party Payment Waiver', width: '40', height: '50' },
        { src: 'arrow.svg', text: 'Upload/Get Referral', width: '41', height: '51' },
        { src: 'phone.svg', text: 'Schedule Appointment with Hospital', width: '45', height: '45' },
        { src: 'shock.svg', text: 'Scan', width: '52', height: '54' },
        { src: 'results.svg', text: 'See Results', width: '38', height: '52' }
      ]
    })
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  section.how-it-works {
    background-color: $white;
    .how-it-works__list {
      lost-flex-container: row;
      .how-it-works__item {
        display: flex;
        flex-flow: column;
        justify-content: center;
        max-width: 360px;
        margin: 0 auto;
        padding: 40px 50px 0;
        text-align: center;
        .simple-svg-wrapper {
          margin: 10px 0;
        }
        h2 {
          padding: 5px;
          color: $blue;
        }
        > h2 {
          font-size: 36px/36px;
        }
      }
    }
    @media (--for-tablet-land-up) {
      h1 {
        padding: 50px 0;
      }
      .how-it-works__list {
        lost-center: 1200px;
        .how-it-works__item {
          lost-column: 1/2 0 0;
          flex-flow: row;
          align-items: flex-start;
          text-align: left;
          .simple-svg-wrapper {
            padding-right: 20px;
            transform: translateY(-20%);
          }
          h2 {
            padding: 0 0 10px 0;
          }
          > h2 {
            padding-right: 40px;
          }
        }
      }
    }
  }
</style>
