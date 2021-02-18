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

<script >

export default {
  name: 'Logotype'
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

  &:hover {

  }

  img {

    max-width: 100%;
    max-height: 100%;
  }

}
</style>
