<template>
  <header class="header">
    <div class="header__wrap container">
      <Logotype class="header__logotype" />
      <Navbar class="header__navbar" />
      <div />
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '~@/assets/scss/layout/header';
</style>
