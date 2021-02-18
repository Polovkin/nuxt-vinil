<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>

export default {

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
