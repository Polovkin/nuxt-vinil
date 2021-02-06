<template>
  <nuxt-link
    to="/"
    class="logotype"
  >
    <img
      src="/assets/img/icons/logo.svg"
      alt="logotype"
    >
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Logotype extends Vue {

}
</script>

<style lang="scss"
       scoped
>
.logotype {
  display: flex;
  align-items: center;
  justify-content: center;
  @include size(40px);

  img {

    max-width: 100%;
    max-height: 100%;
  }

}
</style>
