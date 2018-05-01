<template lang="pug">
div
  div.header-content
    div.header-content__text
      h1 Schedule Your MRI Today
      h4 Why wait for an MRI? Schedule your MRI appointment within 24 hours and receive your results within 24 hours post MRI scan completion.
    div.header-content__buttons
      Button(id="eligibility-btn" classes="btn-big" text="Am I Eligible?")
      Button(id="book-now-header-btn" classes="btn-big" text="Book A Scan")

  section#benefits.home-page
    h1 The Benefits
    div.card-blocks
      div.card-blocks--left
        Card(color="orange" src="calendar.svg" width="143" height="97")
          h4 MRI appointments are schedules directly through the hospital.
          p Within 24 hours of receiving a completed requisiton form, hospital staff will contact patients to book an MRI appointment and coordinate the collection of additional medical information.
        Card(color="yellow" src="results.svg" width="101" height="132")
          h4 MRI Results available 24 hours post MRI scan.
          p MRI results can be accessed through a hospital portal with your own unique login 24 hours following MRI scan completion.  Referring physicians or third pary sources will be forwarded results within one business day.
        Card(color="light-blue" src="money.svg" width="123" height="70")
          h4 Litigation financing for MRI scans
          p Diagnostic Illumination offers convenient third-party litigation financing, which permits for deferred payment of the MRI scan until the case has settled.
      div.card-blocks__divider
      div.card-blocks--right
        Card(color="purple" src="24-phone.svg" width="123" height="120")
          h4 Urgent MRI Scans can be performed within 24 hours; Non-urgent MRI Scans within 1~2 weeks
        Card(color="red" src="arrow-box.svg" width="108" height="131")
          h4 Multiple body part MRI scan packages offered
          p Multiple Body Part MRI Scan Packages offered as an incentive to safeguard cost as being a deterrent in one’s resolve to detect pathology

  location.home-page
  how-it-works.home-page
  book-now.home-page
</template>

<script>
  import Card from '~/components/main/Card'
  import Location from '~/components/main/Location'
  import HowItWorks from '~/components/main/HowItWorks'
  import BookNow from '~/components/main/BookNow'
  import MainFooter from '~/components/MainFooter'

  export default {
    name: 'HomePage',
    components: {
      Card,
      Location,
      HowItWorks,
      BookNow,
      MainFooter
    },
    head() {
      return {
        title: 'Home'
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';
  @import 'components/card-blocks';

  #benefits {
    background-color: $off-white;
    h1 {
      display: none;
    }
    @include card-blocks(210px, 340px, 30px);
    @media (--for-tablet-port-up) {
      h1 {
        display: block;
      }
    }
  }
</style>
