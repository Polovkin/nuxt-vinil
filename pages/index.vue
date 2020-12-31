<template>
  <div>
    <Main/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import Main from '~/components/sections/Main'

@Component({
  component: {Main}
})
export default class Index extends Vue {

}
</script>
<style lang="scss">

</style>
