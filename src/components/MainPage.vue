<template>
  <div id="main-page">
    <div
      v-for="(block, key) in blocks"
      id="red-block"
      :key="key"
      :style="{'height': `${fullUserScreenHeight}px`, 'background-color': `${block.backColor}`}"
    >
      <h1
        class="red-block__main-text"
        @mouseenter.prevent=""
      >
        Just hover and enjoy!
      </h1>
      <div
        class="red-block__secondary-text mt-5"
        @mouseenter="beforeEnjoy"
        @mouseleave="keyIcon = false"
      >
        <div style="display: block">
          <span
            class="main-btn-text"
            @click="startToEnjoy"
          >
            {{ keyIcon ? 'Press me' : 'Hover me' }}
          </span>
          <div
            v-if="keyIcon"
            style="font-size: 25px; color: black"
          >
            <span>
              <br>Just </span>
            <span>
              press </span>
            <span>
              it</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      blocks: [
        {
          backColor: 'black',
        },
      ],
      fullUserScreenWidth: window.innerWidth,
      fullUserScreenHeight: window.innerHeight,
      keyIcon: false,
      justSpan: false,
      doSpan: false,
      itSpan: false,
    };
  },
  mounted() {
    console.log(window);
    const redBlock = document.getElementById('red-block');
    redBlock.addEventListener('mouseleave', () => {
      // window.location.reload();
    });
  },
  methods: {
    beforeEnjoy() {
      this.keyIcon = true;
    },
    startToEnjoy() {
      this.$router.push('/enjoy');
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap');
  #red-block
    display flex
    justify-content center
    align-items center
    flex-grow 1
    flex-direction column
  .red-block__main-text::selection
    color white
    text-shadow 3px 3px 15px #21bbff
  .red-block__main-text
    color: black;
    font-size 46px
    text-shadow: 0 0 9px white;
  .red-block__main-text:hover
    transition 0.2s
    text-shadow 3px 3px 215px black
    color white
  .red-block__main-text:not(:hover)
    transition 0.7s
  .red-block__secondary-text
    font-family: 'Baloo Bhai', cursive;
    color black
    font-size 14px
    text-transform uppercase
    padding 5px 8px
    -webkit-border-radius: 17px
    -moz-border-radius: 17px
    border-radius: 17px
    background-color: #fff
    cursor pointer
    font-weight bold
  .red-block__secondary-text:not(:hover)
    transition 1s
  .red-block__secondary-text:hover
    // border 10px solid transparent
    width: 1000px
    height 500px
    font-size 60px
    text-align center
    display flex
    align-items center
    justify-content center
    transition 0.6s
    text-shadow 3px 3px 10px #8aaeff
    transform rotate3d(50deg)
    background-color #66ff8d
    color white
    box-shadow 0 0 200px 2px white
  .main-btn-text:not(:hover)
    // transition 0.5s
  .main-btn-text:hover
    text-shadow 3px 3px 10px #1c00ff
</style>
