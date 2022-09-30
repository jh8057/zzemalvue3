import { createStore } from 'vuex';

export default createStore({
    state: {
        name: 'jh',
        count: 5,
    },
    getters: {
        getName(state) {
            return state.name;
        },
    },
    mutations: {
        setCount(state, value) {
            state.count = value;
        },
    },
    actions: {},
    modules: {},
});
