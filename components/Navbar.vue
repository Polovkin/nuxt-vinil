<template>
  <header>
    <div class="container">
      <h2>{{ header }}</h2>
      <a href="/">{{  }}</a>
      <a href="/about">About</a>
      <a href="/users">Users</a>
    </div>
  </header>
</template>


<script lang="ts">
export default {
  name: "Navbar",
  data() {
    return {
      header: 'value'
    }
  },
  computed: {

  },
}
</script>

<style>
.polova {
  color: red !important;
}
</style>
