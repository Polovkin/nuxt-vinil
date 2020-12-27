export const state = () => ({
    users: []
})

export const mutations = {
    setUser(s, users) {
        s.users = users
    }
}

export const actions = {
    async fetch({commit}) {
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
        commit('setUser', users)
    }
}

export const getters = {
    users: s => s.users
}
