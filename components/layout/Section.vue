<template>
  <section :class="sectionClass">
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Section extends Vue {
  @Prop(String) readonly sectionClass?: string
}
</script>

<style lang="scss">
section,
.section {
  $padding: 20px;
  position: relative;

  overflow: hidden;
  @include breakpoint($width__laptop-min) {
    padding: ($padding * 3) 0;
  }
  @include breakpoint($width__tablet-land) {
    padding: ($padding * 2) 0;
  }
  @include breakpoint($width__tablet-port) {
    padding: $padding 0;
  }
}

</style>
