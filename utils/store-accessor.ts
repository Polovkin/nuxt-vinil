import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MyModule from '~/store/mymodule'

let myMod: MyModule

function initialiseStores(store: Store<any>): void {
  myMod = getModule(MyModule, store)
}

export {
  initialiseStores,
  myMod
}
