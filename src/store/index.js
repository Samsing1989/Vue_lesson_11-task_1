import { createStore } from 'vuex'
import drivers from './modules/drivers'
import buses from './modules/buses'
import assignments from './modules/assignments'
export default createStore({
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        drivers,
        buses,
        assignments,
    },
})
