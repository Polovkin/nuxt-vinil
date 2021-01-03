<template>
  <main class="main">
    <div class="container">
      <nuxt-link to="/about">
        about
      </nuxt-link>
      <h1>Виниловые пластинки</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Section from '~/components/layout/Section.vue'

@Component({
  components: { Section }
})
export default class Main extends Vue {

}
</script>

<style lang="scss">
@import "./assets/scss/sections/main";
</style>
