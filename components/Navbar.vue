<template>
  <header>
    <div class="container">
      <h2>{{ header }}</h2>
      <a href="/">{{ }}</a>
      <a href="/about">About</a>
      <a href="/users">Users</a>
      <button @click="click">Press</button>
    </div>
  </header>
</template>


<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {getModule} from 'vuex-module-decorators'
import Test from '~/store/test'

@Component({

})
export default class Navbar extends Vue {
  public header: string = 'value'

  mounted() {



    // console.log(this.$store.state['test'].count) // 42
  }

  click() {
    const test = getModule(Test, this.$store)
    test.incr()
    console.log(test.count) // undefined
  }

  get heading(): string {
    return this.header + '1'
  }
}
</script>

<style>
.polova {
  color: red !important;
}
</style>
