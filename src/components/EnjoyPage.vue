<template>
  <div id="enjoy-page">
    <div
      style="cursor: pointer; font-weight: bold; padding: 4px"
      @click="goBack"
    >
      Go back
    </div>
    <div
      class="enjoy-page"
      :style="{'height': `${fullUserScreenHeight - 20}px`}"
    >
      <h1 class="page-main-text">
        {{ pageMainText }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnjoyPage',
  data() {
    return {
      pageMainText: 'Hello from nothing!',
      fullUserScreenHeight: window.innerHeight,
    };
  },
  methods: {
    goBack() {
      if (confirm('Really want to go back?')) {
        this.$router.back();
      }
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  .enjoy-page
    display flex
    justify-content center
    align-items center
    flex-direction column
    flex-grow 1
  .page-main-text
    user-select none
    -ms-user-select none
    -moz-user-select none
    -webkit-user-select none
  .page-main-text:active
    background-color: red
    padding 30px
    font-size 140px
    color white
    text-shadow 0 0 30px black
  .page-main-text:not(:active)
    transition 1s
</style>
