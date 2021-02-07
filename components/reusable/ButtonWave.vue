<template>
  <button
    ref="button"
    class="material-btn"
    :class="btnClass"
    @mousedown="mousedown"
  >
    <span
      ref="wave"
      class="wave"
    />
    <b class="material-btn__text">
      <slot />
    </b>
  </button>
</template>

<script>
export default {
  name: 'ButtonWave',
  props: {
    text: {
      type: String,
      default: 'wave'
    },
    btnClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      button: null,
      wave: null
    }
  },
  mounted () {
    this.button = this.$refs.button
    this.wave = this.$refs.wave
  },
  methods: {
    mousedown (event) {
      const className = 'material-btn--active'
      if (this.button.classList.contains(className)) {
        this.button.classList.remove(className)
      }

      this.wave.style.left = event.clientX - this.button.getBoundingClientRect().left + 'px'
      this.wave.style.top = event.clientY - this.button.getBoundingClientRect().top + 'px'

      // eslint-disable-next-line no-void
      void this.button.offsetWidth
      this.button.classList.add(className)
    }

  }
}
</script>

<style scoped
       lang="scss"
>
$btn_text-color: $color__font--secondary;
$btn_bg-color: $color__primary;
$btn_wave-color: lighten($btn_bg-color, 10%);

@keyframes wave-animation {

  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(10);
    opacity: 0;
  }
}

@keyframes slide-animation {

  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  50% {
    transform: translateX(150%);
    opacity: 0;
  }

  51% {
    transform: translate(-100%);
  }

  100% {
    transform: translate(0%);
    opacity: 1;
  }
}

.material-btn {
  position: relative;

  overflow: hidden;

  padding: 10px 20px;

  border-radius: 10px;

  background-color: $btn_bg-color;

  color: $btn_text-color;
  text-transform: lowercase;

  cursor: pointer;

  &--active .wave {
    animation: wave-animation .8s;
  }

  &:active {

    .material-btn__text {
      top: 1px;
    }
  }

  &__text {
    position: relative;
  }

}

.wave {
  position: absolute;
  top: 0;
  left: 0;

  width: 15px;
  height: 15px;

  border-radius: 100%;

  background: $btn_wave-color;

  transform: scale(0);

}

</style>
