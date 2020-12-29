<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <li v-for="user of usersData"
                   :key="user.id">
        <button @click="openUser(user.id)"> {{ user.name }}</button>
      </li>
    </ul>
  </section>

</template>

<script>
import {Vue, Component} from 'nuxt-property-decorator'
import {usersModule} from '~/store'


@Component({})
export default class Users extends Vue {
  async fetch({store}) {
    if (store.getters['users/GET_USERS'].length === 0) {
      await store.dispatch('users/getUsers')
    }
  }
  get usersData() {
    return usersModule.users
  }

  async created() {
    await usersModule.getUsers()
  }

  openUser(user) {
    this.$router.push('/users/' + user)
  }
}
</script>

<style scoped>

</style>
