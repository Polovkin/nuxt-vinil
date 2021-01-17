import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'header',
  stateFactory: true,
  namespaced: true
})
export default class HeaderStore extends VuexModule {
    menuState: Boolean = false

    @Mutation
    SET_MENU_STATE (value?: Boolean) {
      if (value !== undefined) {
        this.menuState = value
      } else {
        this.menuState = !this.menuState
      }
    }

  //
  // @Action({ rawError: true })
  // async getUsers () {
  //   try {
  //     const users = await axios.get('https://jsonplaceholder.typicode.com/users')
  //     this.setUsers(users.data)
  //   } catch (e) {
  //     console.log(e)
  //     throw e
  //   }
  // }
  //
  // get GET_USERS () {
  //   return this.users
  // }
}
