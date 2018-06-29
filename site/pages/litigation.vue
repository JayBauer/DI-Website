<template lang="pug">
  div
    section#mri-benefits.litigation-page
      h1 Benefits Utilizing MRI for Litigation
      div.circle-list
        div.circle-list--left
          div.circle-list__list-item
            SpinningIcon(color="blue")
            h4 MRI is the gold standard for diagnosing and assessing soft tissue injuries in personal injury claimants.
          div.circle-list__list-item
            SpinningIcon(color="yellow")
            h4 MRI Scans Are Booked Within 24 Hours Of Receiving The Completed Referral Form
          div.circle-list__list-item
            SpinningIcon(color="purple")
            h4 MRI Scans Occur Within 1-2 Weeks Of Receiving The Completed Referral
          div.circle-list__list-item
            SpinningIcon(color="red")
            h4 MRI is universally accepted not only because of its accuracy but also because of the objectivity of its ﬁndings. It matters not whether the claimant is sent for the test at the request of the plaintiff or defendant, the resulting report will be the same.
        div.circle-list__divider
        div.circle-list--right
          div.circle-list__list-item
            SpinningIcon(color="orange")
            h4 Urgent MRI Scans can be performed within 24 hours
          div.circle-list__list-item
            SpinningIcon(color="blue")
            h4 Comprehensive Radiological Reports Are Provided Within 24 Hours Following The MRI Scan
          div.circle-list__list-item
            SpinningIcon(color="yellow")
            h4 MRI results can be accessed through secure, encrypted, password protected hospital portal within 24 hours following MRI scan completion.

    section#weighted-imaging.litigation-page
      h1 Susceptibility Weighted Imaging Scans
      div.circle-list
        div.circle-list__list-item
          SpinningIcon(color="blue")
          h4 Susceptibility Weighted Imaging is a new MRI sequence that relies on the magnetic susceptibility of tissues or compounds in the brain, such as iron-rich hemosiderin, which is a byproduct of hemorrhage.
        div.circle-list__list-item
          SpinningIcon(color="orange")
          h4 Because of the Blood Brain Barrier, hemosiderin deposits remain in the brain for a very long time after the initial trauma.
        div.circle-list__list-item
          SpinningIcon(color="red")
          h4 SWI has been shown in several studies and in clinical application to be much more sensitive in detecting micro-hemorrhages than conventional methods, such as T2*-gradient echo (including 3 Tesla imaging).

    section#swi-benefits.litigation-page
      h1 Benefits Utilizing SWI for Litigation
      div.card-blocks
        div.card-blocks--left
          Card(color="orange" src="target.svg" width="87" height="87")
            p Provides the highest level of sensitivity and detectability of the smallest brain injuries
          Card(color="red" src="half-circle.svg" width="83" height="83")
            p Non-invasive, non-contrast imaging
        div.card-blocks__divider
        div.card-blocks--right
          Card(color="light-blue" src="magnifying-glass.svg" width="74" height="74")
            p Provides high resolution visualization of abnormalities caused by small hemorrhages and microscopic tears
          Card(color="purple" src="venn.svg" width="100" height="66")
            p Objective findings may be utilized to address an injured Insured clients' Minor Injury Guideline (MIG) status either placing them within the MIG or outside of the MIG.

    section#swi-accuracy.litigation-page
      h1 SWI Can Accurately Diagnose:
      div.rounded-blocks
        div.rounded-blocks--left
          div.rounded-block: h5 Traumatic Brain Injuries
          div.rounded-block: h5 Brain Hemorrhages
          div.rounded-block: h5 Cerebrovascular Diseases
        div.rounded-blocks--right
          div.rounded-block: h5 Ischemic Brain Diseases
          div.rounded-block: h5 Arteriovenous Malformations
          div.rounded-block: h5 Neurodegenerative Diseases

    section#when-to-order-swi.litigation-page
      h1 When to Order SWI
      div.circle-list
        div.circle-list__list-item
          h4 Indication to order an SWI
        div.circle-list__list-item
          SpinningIcon(color="blue" size="28")
          p Has your client suffered a head trauma secondary to a Motor Vehicle Collision?
        div.circle-list__list-item
          SpinningIcon(color="light-blue" size="28")
          p Has your client suffered a head trauma secondary to a Slip and Fall Injury?
        div.circle-list__list-item
          h4 Is your client experiencing any one of the following symptoms?
        div.circle-list__list-item
          SpinningIcon(color="orange" size="28")
          p Persistent headaches
        div.circle-list__list-item
          SpinningIcon(color="yellow" size="28")
          p Confusion or diminished cognitive abilities
        div.circle-list__list-item
          SpinningIcon(color="light-blue" size="28")
          p Inability to concentrate
        div.circle-list__list-item
          SpinningIcon(color="blue" size="28")
          p Fatigue that does not diminish with rest
        div.circle-list__list-item
          SpinningIcon(color="purple" size="28")
          p Increased irritability or changes in personality
        div.circle-list__list-item
          SpinningIcon(color="red" size="28")
          p Suffered a loss of consciousness as a consequence of the trauma

    book-now.litigation-page
      h4(name="content") Recieve results within 48 hours.
</template>

<script>
  import Card from '~/components/main/Card'
  import BookNow from '~/components/main/BookNow'
  import SpinningIcon from '~/components/shared/SpinningIcon'

  export default {
    name: 'Litigation',
    components: {
      Card,
      BookNow,
      SpinningIcon
    },
    head() {
      return {
        title: 'MRI for Litigation'
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';
  @import 'components/card-blocks';
  @import 'global/mixins';

  section.litigation-page {
    &#mri-benefits {
      background-color: $off-white;
      @media (--for-tablet-land-up) {
        h1 {
          padding: 50px * * *;
        }
        .circle-list {
          position: relative;
          lost-center: 900px;
          flex-flow: row;
          margin: 50px *;
          &__divider {
            position: absolute 0 50% * *;
            height: 110%;
            border: 0 2px 0 2px / solid / $purple;
            border-radius: 5px;
          }
          &--left {
            margin-right: 30px;
          }
          &--right {
            margin-left: 30px;
          }
        }
      }
    }
    &#weighted-imaging {
      background-color: $white;
    }
    &#swi-benefits {
      background-color: $off-white;
      h1 {
        padding: * 40px 40px 40px;
      }
      @include card-blocks(150px, 350px, 20px);
      .card-block__text {
        p {
          padding: * 30px;
        }
      }
      .card-blocks__divider {
        position: absolute 10px * * *;
        height: 120%;
      }
      @media (--for-desktop-up) {
        padding: 75px * 100px;
      }
    }
    &#swi-accuracy {
      h1 {
        color: $white;
        padding: * * 50px *;
      }
      .rounded-blocks {
        margin: 0 15px;
        .rounded-block {
          $height: 40px;

          lost-center: 500px;
          position: relative;
          align-items: center;
          justify-content: center;
          height: $height;
          margin: calc($height / 2) * *;
          color: $blue $white;
          border-left-radius: calc($height / 2);
          border-right-radius: calc($height / 2);
          &::before {
            content: '';
            position: absolute;
            left: calc($height / 4);
            size: calc($height / 2);
            border-radius: 50%;
            background-color: $orange;
          }
          h5 {
            text-transform: uppercase;
            font-weight: extrabold;
          }
        }
      }
      @media (--for-phone) {
        padding: 25px * * *;
        h1 {
          padding: 30px 0;
          background-color: $blue;
        }
        h5 {
          font-size: 12px;
        }
      }
      @media (--for-tablet-port-up) {
        padding: 75px * 125px;
        .rounded-blocks {
          .rounded-block {
            $height: 60px;

            height: $height;
            margin: calc($height / 2) * * *;
            border-left-radius: calc($height / 2);
            border-right-radius: calc($height / 2);
            &::before {
              left: calc($height / 4);
              size: calc($height / 2);
            }
          }
        }
      }
      @media (--for-tablet-land-up) {
        .rounded-blocks {
          lost-center: 1000px;
          &--left {
            lost-column: 1/2 0 40px;
          }
          &--right {
            lost-column: 1/2 0 40px;
            transform: translateY(45px);
          }
          .rounded-block {
            width: 100%;
          }
        }
      }
    }
    &#when-to-order-swi {
      background-color: $white;
      .circle-list__list-item {
        align-items: center;
        max-width: 500px;
        padding: 25px * * *;
        h4 {
          color: $blue;
        }
        p {
          font-family: "Muli", sans-serif;
          padding: * * * 15px;
        }
      }
    }
  }
  .circle-list {
    .circle-list__list-item {
      lost-center: 600px;
      flex-flow: row;
      align-items: flex-start;
      padding: 30px 30px 0 40px;
      @include half-circle-spinner(36px, $blue, 1s);
      h4, p {
        padding: * * * 20px;
      }
    }
  }
  @media (--for-tablet-port-up) {
    .circle-list {
      .circle-list__list-item {
        padding: 50px * * 0;
        h4, p {
          padding: * * * 40px;
        }
      }
    }
  }
</style>
