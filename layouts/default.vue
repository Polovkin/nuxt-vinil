<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'

export default {
  components: { Footer, Header },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
