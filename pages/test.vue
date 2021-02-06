<template>
  <div>
    <ul>
      <li v-for="user of usersData" :key="user.id">
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { formModule } from '@/utils/store-accessor'

@Component
export default class Test extends Vue {
  async fetch ({ store }:any) {
    if (store.getters['form/GET_USERS'].length === 0) {
      await store.dispatch('form/getUsers')
    }
  }

  get usersData () {
    return formModule.users
  }
}
</script>

<style scoped
       lang="scss"
>

</style>
