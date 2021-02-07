<template>
  <Main />

</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Main from '~/components/sections/Main.vue'
import ItemsBlock from '~/components/sections/ItemsBlock.vue'

@Component({
  components: { Main, ItemsBlock }
})
export default class Index extends Vue {
  async fetch ({ store }:any) {
    if (store.getters['form/GET_USERS'].length === 0) {
      await store.dispatch('form/getUsers')
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/scss/pages/index.scss';
</style>
