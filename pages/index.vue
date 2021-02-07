<template>
  <div class="index">
    <Main />
    <MainForm/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Main from '~/components/sections/Main.vue'
import MainForm from '~/components/sections/MainForm.vue'

@Component({
  components: { Main, MainForm }
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
