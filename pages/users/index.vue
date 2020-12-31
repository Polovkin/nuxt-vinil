<template>
  <section>

    <h1>Users page</h1>
    <ul>
      <li
          v-for="user of usersData"
          :key="user.id"
      >
        <v-btn color="primary"
               @click="openUser(user.id)">
          {{ user.name }}
        </v-btn>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import {usersModule} from '~/store'

@Component({})
export default class Users extends Vue {
  async fetch({store}: { store: any }) {
    if (store.getters['users/GET_USERS'].length === 0) {
      await store.dispatch('users/getUsers')
    }
  }

  get usersData() {
    return usersModule.users
  }

  async mounted() {
    await usersModule.getUsers()
  }

  openUser(user: string) {
    this.$router.push('/users/' + user)
  }
}
</script>

<style scoped>

</style>
