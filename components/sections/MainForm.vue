<template>
  <section v-in-viewport class="main-form section ">
    <div class="container">
      <SectionTitle class="main-form__title">Заголовок</SectionTitle>
      <div class="main-form__wrap ">
        <Form />
        <div class="main-form__block" />
      </div>
    </div>

  </section>
</template>

<script>
import SectionTitle from '@/components/reusable/SectionTitle'
export default {
  name: 'MainForm',
  components: {
    SectionTitle
  }
}
</script>

<style scoped
       lang="scss"
>

</style>
