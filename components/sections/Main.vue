<template>
  <section class="main">
    <div class="main__container container">
      <div class="main__title ">
        <h1 class="main__title-heading">
          Продажа виниловых <br> пластинок
        </h1>
      </div>
      <ul>
        <li v-for="user of users" :key="user.id">
          <p>{{ user.id }}</p>
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
        </li>
      </ul>
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
  async fetch ({ store }: { store: any }) {
    if (store.getters['form/GET_USERS'].length === 0) {
      await store.dispatch('form/TEST_FETCH')
      console.log(1)
    }
  }

  get users () {
    return formModule.users
  }
}
</script>

<style lang="scss">
@import './assets/scss/sections/main';

button {
  color: red;
}
</style>
