<template>
  <div :class="pageClass">
    <MainIndex />
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
