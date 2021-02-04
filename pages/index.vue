<template>
  <div class="container">
    <Main/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Main from '~/components/sections/Main.vue'
import ItemsBlock from '~/components/sections/ItemsBlock.vue'

@Component({
  components: { Main, ItemsBlock }
})
export default class Index extends Vue {

}
</script>
<style lang="scss">
@import "~@/assets/scss/pages/index.scss";
</style>
