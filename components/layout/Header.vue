<template>
  <header class="header">
    <div class="header__wrap container">
      <Logotype class="header__logotype"/>
      <Navbar class="header__navbar"/>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logotype from '@/components/reusable/Logotype.vue'
import Navbar from '@/components/layout/Navbar.vue'

@Component({ components: { Logotype, Navbar } })
export default class Header extends Vue {

}
</script>

<style lang="scss">
@import "~@/assets/scss/layout/header";
</style>
