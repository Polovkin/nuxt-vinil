import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import {$axios} from '~/utils/api'

@Module({
    name: 'mymodule',
    stateFactory: true,
    namespaced: true,
})
export default class MyModule extends VuexModule {
    users = []


    @Mutation
    setUsers(users: any) {
        this.users = users
    }

    @Action({rawError: true})
    async getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (response.ok) {
            let json = await response.json();
            this.setUsers(json)
        } else {
            alert("Ошибка HTTP: " + response.status);
        }

    }
}
