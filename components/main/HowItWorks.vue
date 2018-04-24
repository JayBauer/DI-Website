<template lang="pug">
  section#how-it-works.how-it-works
    h1 How It Works
    ul.how-it-works__list
      li.how-it-works__item(v-for="item, index in list")
        img(:src="'/img/' + item.src" :alt="item.alt")
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
        {
          src: 'airplane.svg',
          alt: 'Paper Airplane Icon',
          text: 'Select Area to Be Scanned'
        },
        {
          src: 'money-orange.svg',
          alt: 'Money Icon',
          text: 'See Quote'
        },
        {
          src: 'pencil-clipboard.svg',
          alt: 'Pencil and Clipboard Icon',
          text: 'Sign Third Party Payment Waiver'
        },
        {
          src: 'upload-paper.svg',
          alt: 'Paper with Upload Symbol',
          text: 'Upload/Get Referral'
        },
        {
          src: 'phone-arrow.svg',
          alt: 'Phone with Arrow Icon',
          text: 'Schedule Appointment with Hospital'
        },
        {
          src: 'scan.svg',
          alt: 'Scanning Icon',
          text: 'Scan'
        },
        {
          src: 'results-orange.svg',
          alt: 'Clipboard Icon',
          text: 'See Results'
        }
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
        img {
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
          img {
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
