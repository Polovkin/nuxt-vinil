<template>
  <div>
    <Header :prop-test="'1'"/>
    <div class="container">
      <h1>{{ data }}</h1>
      <nuxt/>
    </div>
  </div>

</template>

<script lang="ts">

import {Component, Vue} from 'nuxt-property-decorator'
import Header from "~/components/Header.vue";

@Component({
  components: {Header}
})

export default class Default extends Vue {

  public data: string = 'RuleTester'

}
</script>
