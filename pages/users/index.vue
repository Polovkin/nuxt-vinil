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
//export default {
  // async fetch({store}) {
  //   if (store.getters['users/users'].length === 0) {
  //     await store.dispatch('users/fetch')
  //   }
  // },
  // name: "index",
  // computed: {
  //   users() {
  //     return this.$store.getters['users/users']
  //   }
  // },
  // methods: {
  //   openUser(user) {
  //     this.$router.push('/users/' + user)
  //   }
  // },
//}
</script>

<style scoped>

</style>
