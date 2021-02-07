<template lang="pug">
  form#main-form.form(ref="form", @submit.prevent="submit")

    Input(
      :name="'name'",
      :placeholder="'Введите имя'"
      :form-id="'form'"
      v-model="name"
      :form-touch="formTouch"
      is-required
    )
    Input(
      :name="'email'",
      :placeholder="'Введите email'"
      :form-id="'form'"
      v-model="email"
      :form-touch="formTouch"
      is-required
      is-email
    )
    Input(
      :name="'message'",
      :placeholder="'Введите заказ'"
      :form-id="'form'"
      v-model="message"
      :form-touch="formTouch"
      is-required
      is-textarea
    )
    p(v-if="formSend") Заказ отправлен
    button-wave(type="submit") Отправить
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import Input from '@/components/reusable/Input.vue'
import ButtonWave from '@/components/reusable/ButtonWave.vue'
import { formModule } from '~/store'

@Component({
  components: {
    Input,
    ButtonWave
  },
  mounted () {


  }
})
export default class Form extends Vue {
  public name: string | null = null
  public message: string | null = null
  public email: string | null = null

  get formSend (): boolean {
    return formModule.success
  }

  get formTouch (): boolean {
    return formModule.touchFormState
  }

  async submit () {
    if (this.name && this.message && this.email) {
      const form = new FormData()

      form.append('name', this.name)
      form.append('message', this.message)
      form.append('email', this.email)

      await formModule.FORM_SEND(form)
    } else {
      formModule.FORM_TOUCH_STATE()
    }
  }


}
</script>

<style scoped
       lang="scss"
>

</style>
