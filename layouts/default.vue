<template>
  <div>


      <nuxt />


  </div>
</template>

<script >


export default {
  components: {
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/scss/app.scss';

body {

  &::-webkit {

    &-scrollbar {
      width: 10px;

      &-track {

        // background-color: #15141a;
      }

      &-thumb {
        background: $color__primary;
      }
    }
  }

}
</style>
