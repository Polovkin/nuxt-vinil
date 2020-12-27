<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <li v-for="user of users"
                   :key="user.id">
        <button @click="openUser(user.id)"> {{ user.name }}</button>
      </li>
    </ul>
  </section>

</template>

<script>
export default {
  async fetch({store}) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  name: "index",
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user)
    }
  },
}
</script>

<style scoped>

</style>
