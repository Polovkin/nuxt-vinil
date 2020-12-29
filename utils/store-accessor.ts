import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Users from '~/store/users'

let usersModule: Users

function initialiseStores(store: Store<any>): void {
  usersModule = getModule(Users, store)
}

export {
  initialiseStores,
  usersModule
}
