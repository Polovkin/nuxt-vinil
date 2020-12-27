<template>
  <header class="header">

  </header>
</template>

<script lang="ts">
import {Component, Prop, Vue,} from 'nuxt-property-decorator'



@Component
export default class Header extends Vue {


}
</script>

<style scoped>
.header {
  position: fixed;
  height: 60px;
  background-color: red;
}
</style>
