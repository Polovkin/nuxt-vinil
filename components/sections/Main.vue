<template>
  <main class="main section">
    <div class="container">
      <h1>main</h1>
    </div>
  </main>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Section from '~/components/layout/Section'

@Component({
  components: { Section }
})
export default class Main extends Vue {

}
</script>

<style lang="scss">
@import "./assets/scss/sections/main";
</style>
