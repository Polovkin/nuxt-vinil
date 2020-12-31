import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Users from '~/store/users'
import HeaderStore from '~/store/header'

let usersModule: Users
let headerModule: HeaderStore

function initialiseStores(store: Store<any>): void {
  usersModule = getModule(Users, store)
  headerModule = getModule(HeaderStore, store)
}

export {
  initialiseStores,
  usersModule,
  headerModule
}
