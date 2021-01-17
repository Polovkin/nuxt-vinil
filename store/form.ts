import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'
import { mainForm } from '~/types/formTypes'

@Module({
  name: 'form',
  stateFactory: true,
  namespaced: true
})
export default class Form extends VuexModule {
  users = []
  touchFormState = false

  @Mutation
  FORM_TOUCH_STATE () {
    this.touchFormState = true
  }

  @Action({ rawError: true })
  async FORM_SEND (data: any) {
    try {
      const response = await axios.post('http://localhost:3001/form', {
        data
      })
      console.log(response.data)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
