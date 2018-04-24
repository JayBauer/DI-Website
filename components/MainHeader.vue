<template lang="pug">
  header
    div.nav-box--mobile
      div.nav-box__nav-links.nav-box__nav-link--mail
        a.email-link(:href="'mailto:' + email"): i
      div.nav-box__logo
        nuxt-link(:to="{ name: 'index' }")
          img(:src="logo.src" :alt="logo.alt")
      div.nav-box__nav-links.nav-box__nav-link--menu
        button.btn-small menu

    div.nav-box--desktop
      div.nav-box__logo
        nuxt-link(:to="{ name: 'index' }")
          img(:src="logo.src" :alt="logo.alt")
      div.nav-box__nav-menu
        nav.nav-menu__login-nav
          template(v-if="userName")
            nuxt-link.login-nav__nav-item(:to="{ name: 'account-order-history' }") Welcome {{ userName }}!
          template(v-else)
            nuxt-link.login-nav__nav-item(:to="{ name: 'login' }") Log In
          a.login-nav__nav-item(:href="'mailto:' + email") {{ email }}
        nav.nav-menu__main-nav(role="navigation")
          nuxt-link.main-nav__nav-item(:to="{ name: 'booking-id', params: { id: 'new' } }"): h4 Booking
          nuxt-link.main-nav__nav-item(v-for="link in links" :to="{ name: link.name }" :key="link.name"): h4 {{ link.text }}
    slot
</template>

<script>
  import Cookie from 'js-cookie'
  import { USER_ID, CONTACT, LOGO } from '~/constants'

  export default {
    name: 'Header',
    data: () => ({
      email: CONTACT.email,
      logo: LOGO,
      links: [
        { name: 'services', text: 'Services' },
        { name: 'litigation', text: 'MRI for Litigation' },
        { name: 'faq', text: 'FAQ' },
        { name: 'contact', text: 'Contact' }
      ]
    }),
    computed: {
      userId() {
        return Cookie.get(USER_ID)
      },
      userName() {
        return this.$store.getters.userName
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  header {
    padding: 30px 40px;
    .nav-box--mobile {
      lost-flex-container: row;
      justify-content: space-between;
      align-items: center;
      .nav-box__nav-links {
        a.email-link {
          font-size: 30px/30px;
          color: $orange;
          i::before {
            font-awesome: envelope;
          }
        }
      }
      .nav-box__logo {
        img {
          width: 100%;
          max-width: 250px;
        }
      }
      @media (--for-phone) {
        position: relative;
        padding-bottom: 75px;
        max-width: 320px;
        margin: 0 auto;
        .nav-box__logo {
          display: flex;
          justify-content: center;
          position: absolute 60% * * 50%;
          transform: translateX(-50%);
          width: 100%;
          img {
            align-self: center;
          }
        }
      }
      @media (--for-tablet-port-up) {
        max-width: 700px;
        margin: 0 auto;
      }
      @media (--nav-menu) {
        display: none;
      }
    }
    .nav-box--desktop {
      display: none;
      justify-content: space-between;
      background-color: $blue;
      padding: 20px;
      .nav-box__nav-menu {
        align-self: flex-end;
        nav.nav-menu__login-nav {
          padding: 0 20px;
          lost-flex-container: row;
          a.login-nav__nav-item {
            color: $white;
            lost-align: right;
            lost-column: 1/2;
            &:nth-of-type(1) {
              color: $orange;
            }
            &:nth-of-type(2) {
              &::before {
                margin-right: 10px;
                color: $orange;
                font-size: 20px;
                font-awesome: envelope;
              }
            }
          }
        }
        nav.nav-menu__main-nav {
          padding: 15px 20px 10px;
          a.main-nav__nav-item {
            lost-column: 1/5;
            h4 {
              color: $white;
              display: inline-block;
            }
          }
        }
      }
      @media (--nav-menu) {
        display: flex;
      }
    }
  }

  .header-content {
    display: flex;
    flex-flow: column;
    padding: 50px 0;
    text-align: center;
    h1 {
      padding: 0 0 50px;
      color: $white;
    }
    h4 {
      color: $white;
      max-width: 550px;
      margin: 0 auto;
      padding: 0 0 75px 0;
    }
    &__buttons {
      button {
        white-space: nowrap;
      }
    }
    @media (--for-phone) {
      h1 {
        font-size: 36px/36px;
      }
      h4 {
        display: none;
      }
      &__buttons {
        .btn-big {
          margin: 30px 0;
        }
      }
    }
    @media (--for-tablet-port-up) {
      padding: 75px 0 100px;
      text-align: center;
      h1 {
        padding: 10px 0 30px;
        color: $white;
      }
      &__buttons {
        lost-center: 600px;
        .btn-big {
          lost-column: 1/2 0 60px;
        }
      }
    }
  }
</style>
