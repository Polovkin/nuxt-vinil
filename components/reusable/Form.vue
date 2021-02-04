<template lang="pug">
  form#main-form.form(ref="form", @submit.prevent="submit")
    Input(
      :name="'name'",
      :placeholder="'Введите имя'"
      :form-id="'form'"
      v-model="name"
      is-required
    )
    Input(
      :name="'message'",
      :placeholder="'Введите заказ'"
      :form-id="'form'"
      v-model="message"
      is-required
    )
    button(type="submit") submit
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import Input from '@/components/reusable/Input.vue'
import { formModule } from '~/store'

@Component({
  components: {
    Input
  },
  mounted () {

  }
})
export default class Form extends Vue {
  public name : string | null = null
  public message : string | null= null

  submit () {
    if (this.name && this.message) {
      const form = new FormData()

      form.append('name', this.name)
      form.append('message', this.message)

      formModule.FORM_SEND(form)
    } else {
      console.log('fail')
      formModule.FORM_TOUCH_STATE()
    }
  }
  // get usersData () {
  //   return usersModule.users
  // }
  //
  // async mounted () {
  //   await usersModule.getUsers()
  // }
}
</script>

<style scoped
       lang="scss"

>

</style>
