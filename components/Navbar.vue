<template>
  <header>
    <div class="container">
      <h2>{{ header }}</h2>
      <a href="/">{{ }}</a>
      <a href="/about">About</a>
      <a href="/users">Users</a>
    </div>
  </header>
</template>


<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  public header: string = 'value'


  get heading(): string {
    return this.header + '1'
  }
}
</script>

<style>
.polova {
  color: red !important;
}
</style>
