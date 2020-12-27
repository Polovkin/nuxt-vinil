<template>
  <section>

  </section>
</template>

<script lang="ts">
import {Component, Vue,} from 'nuxt-property-decorator'
import User from "../components/User.vue";

@Component({
  components: {User}
})
export default class index extends Vue {
}
</script>
<style lang="scss">
h1 {
  color: $color__primary;
}
</style>
