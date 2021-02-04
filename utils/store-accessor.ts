import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Form from '~/store/form'
import HeaderStore from '~/store/header'
import Tutorials from '~/store/tutorials'

let formModule: Form
let headerModule: HeaderStore
let tutorialsModule: Tutorials

function initialiseStores (store: Store<any>): void {
  formModule = getModule(Form, store)
  headerModule = getModule(HeaderStore, store)
  tutorialsModule = getModule(Tutorials, store)
}

export {
  initialiseStores,
  formModule,
  tutorialsModule,
  headerModule
}
