<template>
  <header>
    <div class="container">

      <a href="/">{{ my }}</a>
      <a href="/about">About</a>
      <a href="/users">Users</a>
    </div>
  </header>
</template>


<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import {myMod} from '~/store'


@Component({})
export default class Navbar extends Vue {

  get my() {
    return myMod.wheels
  }
}
</script>

<style>
.polova {
  color: red !important;
}
</style>
