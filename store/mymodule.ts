import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import axios from "axios";
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
        try {
            const users = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            this.setUsers(users)
        } catch (e) {
            console.log(e);
            throw e
        }

        // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // if (response.ok) {
        //     let json = await response.json();
        //     this.setUsers(json)
        // } else {
        //     alert("Ошибка HTTP: " + response.status);
        // }
    }
}
