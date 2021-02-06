<template>
  <section class="main">
    <div class="main__container container">
      <div class="main__title ">
        <h1 class="main__title-heading">
          Продажа виниловых <br> пластинок
        </h1>
      </div>
      <nuxt-link to="/test">
        asd
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Section from '~/components/layout/Section.vue'
import ButtonWave from '~/components/reusable/ButtonWave.vue'
import Form from '~/components/reusable/Form.vue'

import { formModule } from '~/store'

@Component({

  components: {
    Section,
    ButtonWave,
    Form
  }
})
export default class Main extends Vue {

}
</script>

<style lang="scss">
@import './assets/scss/sections/main';

button {
  color: red;
}
</style>
