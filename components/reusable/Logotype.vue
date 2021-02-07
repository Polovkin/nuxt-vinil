<template>
  <nuxt-link
    to="/"
    class="logotype"
  >
    <img
      src="~/assets/icons/logo.svg?inline"
      alt="logotype"
    >
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Logotype extends Vue {
  mounted () {
    console.log('test')
  }
}
</script>

<style lang="scss"
       scoped
>
.logotype {
  @include size(40px);
  align-items: center;
  justify-content: center;

  display: flex;

  img {

    max-width: 100%;
    max-height: 100%;
  }

}
</style>
