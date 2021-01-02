<template>
  <div>
    <Main />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Main from '~/components/sections/Main.vue'

@Component({
  components: { Main }
})
export default class Index extends Vue {

}
</script>
<style lang="scss">

</style>
