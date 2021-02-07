<template>
  <section class="main">
    <div class="main__container container">
      <div class="main__title ">
        <h1 class="main__title-heading">
          Продажа виниловых <br> пластинок
        </h1>
      </div>
      <ul>
        <li v-for="user of usersData" :key="user.id">
          <p><b>{{ user.name }}</b></p>

         <p> <small>{{ user.email }}</small></p>
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
  get usersData () {
    return formModule.users
  }
}
</script>

<style lang="scss">
@import './assets/scss/sections/main';

li {
  margin: 10px;
  padding: 10px;

  border: 1px solid black;
}
</style>
