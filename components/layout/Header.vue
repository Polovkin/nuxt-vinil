<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <Logotype />
        <Navbar />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logotype from '@/components/Logotype.vue'
import Navbar from '@/components/Navbar.vue'

@Component({ components: { Logotype, Navbar } })
export default class Header extends Vue {

}
</script>

<style lang="scss">
@import "~@/assets/scss/layout/header";
</style>
