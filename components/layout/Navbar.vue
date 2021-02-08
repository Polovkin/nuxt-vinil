<template>
  <nav class="navigation">
    <ul class="navigation__List">
      <li
        v-for="links of navigation"
        :key="links.id"
        class="navigation__item"
      >
        <nuxt-link
          :to="links.link"
          class="navigation__link animate-link"
        >
          {{ links.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Navbar extends Vue {
  public navigation = [
    {
      text: 'Магазин',
      link: '#order'
    },
    {
      text: 'Контакты',
      link: '#contacts'
    }
  ]
}
</script>

<style scoped
       lang="scss"
>
.navigation {

  &__List {
    align-items: center;

    display: flex;
  }

  &__item {
    margin: 0 1rem;
  }

  &__link {
    color: $color__font--secondary;
    font-family: DrukCyr,serif;
    font-size: 26px;
    letter-spacing: 2px;
  }
}
</style>
