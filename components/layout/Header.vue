<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__logo">Logo</div>
      </div>

    </div>

  </header>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'

@Component({})
export default class Header extends Vue {

}
</script>

<style lang="scss">
@import "./assets/scss/layout/header";
</style>
