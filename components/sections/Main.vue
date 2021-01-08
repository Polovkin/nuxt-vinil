<template>
  <main class="main">
    <div class="main__title container">
      <h1>
        Продажа виниловых <br> пластинок
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporesse cillum dolore eu fugiat nulla eu fugiat nulla pariatur.
      </p>
      <ButtonWave class="btn-primary">Заказать</ButtonWave>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Section from '~/components/layout/Section.vue'
import ButtonWave from '~/components/ButtonWave.vue'

@Component({
  components: {
    Section,
    ButtonWave
  }
})
export default class Main extends Vue {

}
</script>

<style lang="scss">
@import "./assets/scss/sections/main";

</style>
