import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

@Module({
  name: 'form',
  stateFactory: true,
  namespaced: true
})
export default class Form extends VuexModule {
  touchFormState = false
  success = false

  @Mutation
  FORM_TOUCH_STATE (): void {
    this.touchFormState = true
  }
  @Mutation
  SUCCESS_SEND (): void {
    this.success = !this.success
  }

  @Action({ rawError: true })
  async FORM_SEND (data: object) {
    try {
      const response = await axios('http://localhost:3001/form/', {
        method: 'post',
        data
      })
      if (response.statusText === 'OK') {
        this.SUCCESS_SEND()
      } else {
        console.log('send error')
      }
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
