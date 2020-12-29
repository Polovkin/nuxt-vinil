<template>
  <header>
    <div class="container">
      <h1>Heroku master</h1>
      <a href="/">{{ test }}</a>
    </div>
  </header>
</template>


<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import {myMod} from '~/store'


@Component({})
export default class Navbar extends Vue {
  get test() {
    return myMod.users
  }

  async created() {
    await myMod.getUsers()
  }

}
</script>

<style>
.polova {
  color: red !important;
}
</style>
