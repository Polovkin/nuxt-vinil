<template>
  <header>
    <div class="container">
      <h1>Heroku master</h1>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/users">Users</nuxt-link>
    </div>
  </header>
</template>


<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import {usersModule} from '~/store'


@Component({})
export default class Navbar extends Vue {


}
</script>

<style>
.polova {
  color: red !important;
}
</style>
