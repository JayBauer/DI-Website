<template lang="pug">
  section#book-now.book-now
    slot(name="title")
      h1 Book Now
    slot(name="content")
      h4 Get Results back in two weeks.
    Button(id="book-now-btn" classes="btn-big" text="Book A Scan")
</template>

<script>
  export default {
    name: 'BookNow'
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  section#book-now.book-now {
    text-align: center;
    color: $white;
    h1 {
      color: $white;
    }
    h4 {
      padding: 20px 0;
    }
    @media (--for-tablet-port-up) {
      h4 {
        padding: 50px 0;
      }
    }
  }
</style>
