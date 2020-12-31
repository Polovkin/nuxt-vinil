<template>
  <section :class="sectionClass">
    <div class="container">
      <slot/>
    </div>
  </section>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator'

@Component
export default class Section extends Vue {
  @Prop(String) readonly sectionClass?: string
}
</script>

<style scoped
       lang="scss">

</style>
