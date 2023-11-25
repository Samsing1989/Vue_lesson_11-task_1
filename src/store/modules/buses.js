export default {
    namespaced: true,
    state: {
        busesList: [
            {
                id: 1,
                number: 'AO2312HA',
                placesNumber: 30,
            },
            {
                id: 2,
                number: 'AO237HA',
                placesNumber: 24,
            },
        ],
    },
    getters: {
        getBusesList: (state) => state.busesList,
        getBusById: (state) => (busId) => state.busesList.find((bus) => bus.id == busId),
    },
    mutations: {
        deleteBus(state, busId) {
            state.busesList = state.busesList.filter((bus) => bus.id !== busId)
        },
        addBus(state, bus) {
            state.busesList.push(bus)
        },
        upDateBus(state, busToUpDate) {
            const busIndex = state.busesList.findIndex((bus) => bus.id === busToUpDate.id)
            state.busesList[busIndex] = busToUpDate
        },
    },
    actions: {
        deleteBusAction({ commit, dispatch }, busId) {
            commit('deleteBus', busId)
            dispatch('assignments/deleteAssignmentByBusId', busId, { root: true })
        },
        addBusAction({ commit }, busData) {
            commit('addBus', {
                id: new Date().getTime(),
                ...busData,
            })
        },
        upDateBusAction({ commit }, bus) {
            commit('upDateBus', bus)
        },
    },
    modules: {},
}
