<template>
  <main class="main ">
    <div class="main__wrap container">
      <div class="main__title ">
        <h1 class="main__title-heading">
          Продажа виниловых <br> пластинок
        </h1>
        <ButtonWave class="btn-primary">
          Заказать
        </ButtonWave>
      </div>
      <div class="main__form">
        <Form />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Section from '~/components/layout/Section.vue'
import ButtonWave from '~/components/ButtonWave.vue'
import Form from '~/components/Form.vue'
import { formModule } from '~/store'

@Component({
  components: {
    Section,
    ButtonWave,
    Form
  }
})
export default class Main extends Vue {
  // get usersData () {
  //   return usersModule.users
  // }
  //
  // async mounted () {
  //   await usersModule.getUsers()
  // }
}
</script>

<style lang="scss">
@import "./assets/scss/sections/main";

</style>
