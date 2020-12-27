import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators'

@Module({
    stateFactory: true,
    namespaced: true,
    name: 'test'
})
export default class Test extends VuexModule {
    count: number = 0

    @Mutation
    increment(delta: number) {
        this.count += delta
    }
    @Mutation
    decrement(delta: number) {
        this.count -= delta
    }

    // action 'incr' commits mutation 'increment' when done with return value as payload
    @Action({ commit: 'increment' })
    incr() {
        return 5
    }
    // action 'decr' commits mutation 'decrement' when done with return value as payload
    @Action({ commit: 'decrement' })
    decr() {
        return 5
    }
}
