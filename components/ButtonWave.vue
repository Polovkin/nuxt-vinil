<template>
  <button
    ref="button"
    class="material-btn uppercase relative overflow-hidden cursor-pointer rounded-2xl"
    :class="btnClass"
    @mousedown="mousedown"
  >

    <span
      ref="wave"
      class="wave absolute rounded-full"
    />
    <b class="material-btn__text relative"><slot /></b>

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
$btn_text-color: $color__font--primary;
$btn_bg-color: $color__primary;
$btn_wave-color: lighten($btn_bg-color,10%);

.material-btn {
  color: $btn_text-color;
  background-color: $btn_bg-color;
  padding: 10px 25px;

  &--active .wave {
    animation: wave-animation .8s;
  }
  &:active {
    .material-btn__text {
      top: 1px;
    }
  }
}

.wave {
  top: 0;
  left: 0;

  width: 15px;
  height: 15px;

  transform: scale(0);
  background: $btn_wave-color;
}

@keyframes wave-animation {
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    transform: scale(10);
    opacity: 0;
  }
}

@keyframes slide-animation {
  0% {
    opacity: 1;
    transform: translateX(0%);
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

</style>
