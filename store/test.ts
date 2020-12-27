import {Module, VuexModule} from 'vuex-module-decorators'

@Module({stateFactory: true, namespaced: true, name: 'test'})
export default class Test extends VuexModule {
    count: number = 42
}
