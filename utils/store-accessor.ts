import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Form from '~/store/form'
import HeaderStore from '~/store/header'
import Users from '~/store/users'

let formModule: Form
let headerModule: HeaderStore
let usersModule: Users

function initialiseStores (store: Store<any>): void {
  formModule = getModule(Form, store)
  headerModule = getModule(HeaderStore, store)
  usersModule = getModule(Users, store)
}

export {
  initialiseStores,
  formModule,
  usersModule,
  headerModule
}
