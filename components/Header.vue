<template>
<header class="header">
  <h2>header</h2>
  <ul>
    <li v-for="item of categoryList">
      <b>{{item.name}}</b>
      <a :href="item.link">link</a>
    </li>
  </ul>
</header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  title: string = 'Product Categories'
  categoryList: Array<object> = [
    {
      name: 'Phones',
      link: '/phones',
      image: 'iphone-11.png'
    },
    {
      name: 'Laptops',
      link: '/laptops',
      image: 'macbook.png'
    }
  ]

  test() {
    let a = this.title * 123
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  height: 60px;
  background-color: red;
}
</style>
