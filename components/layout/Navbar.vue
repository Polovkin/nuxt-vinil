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
          {{ $t('header.shop') }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link :to="switchLocalePath('en')">
      English
    </nuxt-link>
    <nuxt-link :to="switchLocalePath('ru')">
      Russian
    </nuxt-link>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      navigation: [
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
  },
  mounted () {
    console.log(this.$t('header'))
  }
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
    font-family: DrukCyr, serif;
    font-size: 26px;
    letter-spacing: 2px;
  }
}
</style>
