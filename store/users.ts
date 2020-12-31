import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import axios from "axios";

@Module({
    name: 'users',
    stateFactory: true,
    namespaced: true,
})
export default class Users extends VuexModule {
    users = []


    @Mutation
    setUsers(users: never[]) {
        this.users = users
    }

    @Action({rawError: true})
    async getUsers() {
        try {
            const users = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.setUsers(users.data)
        } catch (e) {
            console.log(e);
            throw e
        }
    }

    get GET_USERS() {
        return this.users
    }
}
