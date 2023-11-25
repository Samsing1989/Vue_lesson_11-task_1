<template>
    <drivers-filters />
    <div>
        <ul>
            <li v-for="driver in getFilteredList" :key="driver.id">
                {{ driver.name }} - {{ driver.exp }}
                <button class="button" @click="onEdit(driver.id)">Редагувати</button>
                <button class="button" @click="deleteDriverAction(driver.id)">Видалити</button>
            </li>
        </ul>
        <router-link :to="{ name: 'drivers-config' }">Додати водія</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DriversFilters from '../components/DriversFilters.vue'
export default {
    name: 'DriversView',
    components: {
        DriversFilters,
    },
    computed: {
        ...mapGetters('drivers', ['getFilteredList']),
    },
    created() {
        this.deleteDriverAction()
    },
    methods: {
        ...mapActions('drivers', ['deleteDriverAction']),

        onEdit(driverId) {
            this.$router.push({
                name: 'drivers-config',
                params: {
                    id: driverId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
