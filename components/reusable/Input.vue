<template lang="pug">
  label.input-custom(
    :for="inputId"
    :class="{'input-custom--error': invalid ,'input-custom--valid':valid}")

    span.input-custom__placeholder(:class="{'input-custom__placeholder--animate':isActive}")
      | {{ placeholder }}
    template(v-if="isTextarea")
      textarea.input-custom__textarea(
        v-model.lazy='$v.textarea.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        autocomplete="off"
        @focus="focus"
        @blur="focusOut"
      )
    template(v-else)
      input.input-custom__input(
        v-if="isPassword"
        v-model.lazy='$v.password.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        type="password"
        autocomplete="new-password"
        @focus="focus"
        @blur="focusOut"
      )
      input.input-custom__input(
        v-else-if="isEmail"
        v-model.lazy='$v.email.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        type="email"
        autocomplete="off"

        @focus="focus"
        @blur="focusOut"
      )

      input.input-custom__input(
        v-else
        v-model.lazy='$v.simpleText.$model'
        :id="inputId"
        :name="name"
        :form="formId"
        type="text"
        autocomplete="off"
        @focus="focus"
        @blur="focusOut"
      )
    template(v-if="isRequired")
      span.input-custom__error-msg.animation-shake(v-if="!$v[validatorType].required && $v[validatorType].$dirty")
        | Field is required
    template(v-if="lengthValidatorTypes")
      span.input-custom__error-msg.animation-shake(v-if='!$v[validatorType].minLength')
        | {{name}} must have at least {{ $v[validatorType].$params.minLength.min }} letters.
      span.input-custom__error-msg.animation-shake(v-if='!$v[validatorType].maxLength')
        | {{name}} must have no more than {{ $v[validatorType].$params.maxLength.max }} letters.
    template(v-if="isEmail")
      span.input-custom__error-msg.animation-shake(v-if='!$v.email.email')
        | Email is not valid

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Input',
  mixins: [validationMixin],
  validations: {
    simpleText: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    textarea: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(200)
    }
  },
  props: {
    isTextarea: {
      type: Boolean,
      default: false
    },
    isPassword: {
      type: Boolean,
      default: false
    },
    isEmail: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    formId: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      isActive: false,
      simpleText: '',
      textarea: '',
      email: '',
      password: '',
      lengthTypes: ['textarea', 'simpleText', 'password']
    }
  },
  computed: {
    inputId () {
      return `input__${this.name}`
    },
    validatorType () {
      return this.isTextarea ? 'textarea' : this.isEmail ? 'email' : this.isPassword ? 'password' : 'simpleText'
    },
    lengthValidatorTypes () {
      return 'minLength' in this.$v[this.validatorType] && 'maxLength' in this.$v[this.validatorType]
    },
    valid () {
      const elem = this.$v[this.validatorType]
      return !elem.$error && elem.$dirty
    },
    invalid () {
      const elem = this.$v[this.validatorType]
      if (this.isRequired) {
        return elem.$error && elem.$dirty
      } else {
        return !elem.minLength || !elem.maxLength
      }
    }
  },
  mounted () {

  },
  methods: {
    focus () {
      this.isActive = true
    },
    focusOut (e) {
      this.$v.$touch()
      const value = e.target.value
      this.isActive = !!value
      if (!this.$v[this.validatorType].$invalid) {
        this.$emit('input', value)
      } else {
        this.$emit('input', null)
      }
    }
  }
}
</script>
<style lang="scss"
       scoped>
$input__text: black;
$input__text-size: 16px;
$input__placeholder: rgba($input__text, .3);
$input__error: red;
$input__valid: green;
$input__border: black;

$input__height: 40px;

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

%reset {
  font-size: $input__text-size;
  padding: 0;
  margin: 0;
  outline: none;
  border: {
    radius: 0;
    left: {
      color: transparent;
      width: 0;
    }
    right: {
      color: transparent;
      width: 0;
    };
    top: {
      color: transparent;
      width: 0
    };
    bottom: 2px solid $input__border;
  };

}

.input-custom {
  width: 100%;
  color: $input__text;
  display: grid;
  grid: {
    template: {
      areas: 'placeholder' 'input' 'error';
      rows: 20px $input__height 25px;
    };
  }

  &--error {
    .input-custom__placeholder {
      color: $input__error;
    }

    input, textarea {
      color: $input__error;
      border-bottom-color: $input__error;
    }
  }

  &--valid {
    .input-custom__placeholder {
      color: $input__valid;
    }

    input, textarea {
      color: $input__valid;
      border-bottom-color: $input__valid;
    }
  }

  &__placeholder {
    transform-origin: left;
    transform: translate(0, $input__height / 1.5) scale(1);
    grid-area: placeholder;
    color: $input__placeholder;
    transition: all .3s ease-in;

    &--animate {
      color: $input__text;
      transform: translate(0) scale(.7);
    }
  }

  &__input, &__textarea {
    grid-area: input;
    @extend %reset;
    height: $input__height;
    color: $input__text;
  }

  &__textarea {
    height: unset;
    max-height: $input__height;
    padding-top: ($input__height - $input__text-size) / 2;

    &::-webkit-scrollbar {
      width: 4px;

      &-track {
        background: #f1f1f1;
      }

      &-thumb {
        background: #888;

        &:hover {
          background: #555;
        }
      }
    }
  }

  &__error-msg {
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: $input__error;
    grid-area: error;
  }
}
</style>
