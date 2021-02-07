<template lang="pug">
  h2(:class="{'section-title--light':isLight}").section-title
    slot
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    isLight: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped
       lang="scss"
>
.section-title {
  $font_size: 56px;
  font-size: $font_size;
  font-weight: 800;
  text-transform: uppercase;

  &--light {
    color: $color__font--secondary;
  }

  @include breakpoint($desktop__laptop) {
    font-size: $font_size * .8;
  }
  @include breakpoint($tablet__all) {
    font-size: $font_size * .6;
  }
  @include breakpoint($phone__all) {
    font-size: $font_size * .4;
  }
}
</style>
