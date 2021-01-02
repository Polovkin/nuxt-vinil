<template>
  <div>
    <Main />
    <ItemsBlock />
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

</style>
