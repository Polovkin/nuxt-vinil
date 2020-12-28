import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
    name: 'mymodule',
    stateFactory: true,
    namespaced: true,
})
export default class MyModule extends VuexModule {
    wheels = 123

    @Mutation
    incrWheels(extra: number) {
        this.wheels += extra
    }

    get axles() {
        return this.wheels / 2
    }
}
