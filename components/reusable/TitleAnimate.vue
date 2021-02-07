<template lang="pug">
  div.title(:class="{'fade':fade ,'translate':translate}")
    span.title__wrap(v-for="span of componentText")
      span.title__text(:class="span.style") {{ span.text }}

</template>

<script>


export default {
  name: 'TitleAnimate',
  props: {
    componentText: {},
    fade: {
      type: Boolean,
      default: false
    },
    translate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped
       lang="scss">
$text_animation: 1.5s;

%underlineLine {
  @include pseudoElement(100%);
  bottom: -2px;
  left: 0;

  max-width: 0;
  height: 5px;

  transition: all ease 1s $text_animation;
}

%underlineBlock {
  position: relative;

  display: inline-flex;

  width: auto;

  font-size: inherit;
}

@mixin animations {

  .translate {

    .title__text {
      transform: translateY(0);
    }
  }

  .fade {

    &:before {
      transform: translateX(100%);
    }

    .title__text {
      opacity: 1;
    }
  }

  .title {

    .underline, .underline-gold, .underline-white {

      &:after {
        max-width: 100%;
      }
    }
  }

}

.animation, {
  @include animations();
}

.in-viewport {
  @include animations();
}

.works-main span.title {
  color: $color__font--secondary;
}

//Bse

span.title {
  position: relative;

  display: block;

  font-size: inherit;
  line-height: inherit;

  span {
    position: relative;

    margin-right: .5rem;

    font-size: inherit;
    line-height: inherit;

    &.bold {
      font-weight: bold;
    }

    &.italic {
      font-style: italic;
      font-weight: normal;
    }

    &.gold {
      color: $color__primary;
    }

    &.underline {
      @extend %underlineBlock;

      &:after {
        @extend %underlineLine;
        background-color: $color__dark;

        @include breakpoint($desktop__laptop) {
          bottom: 6px;
        }
      }

      &-gold {
        @extend %underlineBlock;

        &:after {
          @extend %underlineLine;
          background-color: $color__primary;
        }

        @include breakpoint($phone__all) {
          text-decoration: underline;

          &:after {
            display: none;
          }
        }
      }

      &-white {
        @extend %underlineBlock;

        &:after {
          @extend %underlineLine;
          background-color: $color__light;
        }

        @include breakpoint($mobile__all) {
          text-decoration: underline;

          &:after {
            display: none;
          }
        }
      }

      &--light {
        position: unset;

        text-decoration: underline;
      }
    }
  }
}

//Effects

.translate {

  .title__wrap {
    @for $i from 1 through 10 {
      &:nth-of-type(#{$i}) {

        .title__text {
          transition: all ease $text_animation #{$i * .1s};
        }
      }
    }
    display: inline-block;
    height: 75px;
    overflow: hidden;

    @include breakpoint($desktop__laptop) {
      height: 56px;
    }
    @include breakpoint($tablet__all) {
      height: 56px;
    }
    @include breakpoint($phone__all) {
      height: 43px;
    }
  }

  .title__text {
    display: inline-block;

    transform: translateY(100%);
  }
}

.fade {
  position: relative;

  overflow: hidden;

  &:before {

    content: '';

    position: absolute;
    top: 0;
    left: -100%;
    z-index: 2;

    width: 200%;
    height: 100%;

    background: #fff;
    background: linear-gradient(135deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .1295868689) 16%, hsla(0, 0%, 100%, .5917717429) 24%, #fff 38%, #fff);

    transition: all 2s ease 1s;
  }

  .title__text {

    opacity: 0;

    transition: all $text_animation ease 1s;

  }
}

</style>
