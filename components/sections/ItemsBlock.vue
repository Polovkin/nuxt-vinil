<template>
  <Section>
    <h2>Items</h2>
  </Section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Section from '~/components/layout/Section'

@Component({
  components: { Section }
})
export default class ItemsBlock extends Vue {

}
</script>

<style lang="scss">
@import "./assets/scss/sections/main";
</style>
