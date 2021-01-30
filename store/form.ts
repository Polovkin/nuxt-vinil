import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'
import { mainForm } from '~/types/formTypes'

@Module({
  name: 'form',
  stateFactory: true,
  namespaced: true
})
export default class Form extends VuexModule {
  touchFormState = false

  @Mutation
  FORM_TOUCH_STATE () :void {
    this.touchFormState = true
  }

  @Action({ rawError: true })
  async FORM_SEND (data: object) {
    console.log(data)
    try {
      const response = await axios('http://localhost:3001/form', {
        method: 'post',
        data
      })
      console.log(response.data)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
