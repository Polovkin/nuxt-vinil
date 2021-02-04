<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'

export default {
  components: { Footer, Header },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/app.scss";
.main {
  padding-top: $header_height;
}
</style>
