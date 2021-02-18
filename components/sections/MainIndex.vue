<template>
  <section
    v-in-viewport.once
    class="main"
  >
    <div class="main__bg">
      <span
        v-for="n of 6"
        :key="n"
      />
    </div>
    <div class="main__container container">
      <div class="main__title ">
        <h1 class="main__title-heading ">
          Магазин виниловых пластинок
        </h1>
        <!--        <p
          v-for="(device,key,index) of $device"
          :key="index"
          class="main__title-text"
        >
          <b> {{ key }}</b>: {{ device }}
        </p>-->
        <p class="main__title-text">
          Заказ и доставка любых пластинок
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Main'
}
</script>

<style lang="scss">
@import './assets/scss/sections/main';

</style>
