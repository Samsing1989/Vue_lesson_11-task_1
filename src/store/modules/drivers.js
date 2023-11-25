import { isMatchFilter } from '../helper.js'
export default {
    namespaced: true,
    state: {
        driversList: [
            {
                id: 1,
                name: 'Ivan',
                exp: 12,
            },
            {
                id: 2,
                name: 'Petro',
                exp: 23,
            },
        ],
        filter: {},
    },
    getters: {
        getDriversList: (state) => state.driversList,
        getFilteredList: (state) => state.driversList.filter((driver) => isMatchFilter(driver, state.filter)),
        getDriverById: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
    },
    mutations: {
        deleteDriver(state, driverId) {
            state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
        },
        addDriver(state, driver) {
            state.driversList.push(driver)
        },
        upDateDriver(state, driverToUpDate) {
            const driverIndex = state.driversList.findIndex((driver) => driver.id === driverToUpDate.id)
            state.driversList[driverIndex] = driverToUpDate
        },
        setFilter(state, filterData) {
            state.filter = filterData
        },
    },
    actions: {
        deleteDriverAction({ commit, dispatch }, driverId) {
            commit('deleteDriver', driverId)
            dispatch('assignments/deleteAssignmentByDriverId', driverId, { root: true })
        },
        addDriverAction({ commit }, driverData) {
            commit('addDriver', {
                id: new Date().getTime(),
                ...driverData,
            })
        },
        upDateDriverActive({ commit }, driver) {
            commit('upDateDriver', driver)
        },
        upDateFilter({ commit }, filterData) {
            commit('setFilter', filterData)
        },
    },
    modules: {},
}
