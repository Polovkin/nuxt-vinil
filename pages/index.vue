<template>
  <div :class="pageClass">
    <h1>Test</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      pageClass: this.$route.name
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/scss/pages/index.scss';
</style>
