<template>
  <header>
    <div class="container">

      <a href="/">{{ }}</a>
      <a href="/about">About</a>
      <a href="/users">Users</a>
    </div>
  </header>
</template>


<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'



@Component({

})
export default class Navbar extends Vue {
  mounted() {
    console.log(1)
  }

}
</script>

<style>
.polova {
  color: red !important;
}
</style>
