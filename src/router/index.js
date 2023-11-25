import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriversView from '../views/DriversView.vue'
import BussesVies from '../views/BussesVies.vue'
import DefinitionView from '../views/DefinitionView.vue'
import ContactsVies from '../views/ContactsVies.vue'
import BusEdit from '../views/BusEdit.vue'
import DriverEdit from '../views/DriverEdit.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
    {
        path: '/drivers/config/:id?',
        name: 'drivers-config',
        component: DriverEdit,
    },
    {
        path: '/busses',
        name: 'busses',
        component: BussesVies,
    },
    {
        path: '/busses/config/:id?',
        name: 'busses-config',
        component: BusEdit,
    },
    {
        path: '/definition',
        name: 'definition',
        component: DefinitionView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsVies,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
