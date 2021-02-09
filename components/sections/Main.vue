<template>
  <section
      v-in-viewport.once
      class="main"
  >
    <div class="main__bg">
      <span
          v-for="n of 6"
          :key="n"
      />
    </div>
    <div class="main__container container">
      <div class="main__title ">
        <h1 class="main__title-heading ">
          Магазин виниловых пластинок
        </h1>
        <p class="main__title-text">
          Заказ и доставка любых пластинок
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ButtonWave from '~/components/reusable/ButtonWave.vue'
import Form from '~/components/reusable/Form.vue'

@Component({

  components: {
    ButtonWave,
    Form
  }
})
export default class Main extends Vue {
  mounted () {
    console.log(this.$device)
  }
}
</script>

<style lang="scss">
@import './assets/scss/sections/main';

</style>
