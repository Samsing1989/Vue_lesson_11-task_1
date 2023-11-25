<template>
    <div>
        <h2>Фільтер</h2>
        <div>
            <label class="lable">
                ПІБ шофера:
                <input v-model="filterData.name" type="text" />
            </label>
        </div>
        <div>
            Стаж шофера:
            <label class="lable">
                Від
                <input v-model="filterData.expFrom" type="number" />
            </label>
            <label class="lable">
                До
                <input v-model="filterData.expTo" type="number" />
            </label>
        </div>
    </div>
    <button class="button" @click="onReset">Обнулити</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'DriversFilters',

    data() {
        return {
            filterData: {},
        }
    },
    watch: {
        filterData: {
            handler(newValue) {
                this.upDateFilter(newValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions('drivers', ['upDateFilter']),
        onReset() {
            this.filterData = {}
        },
    },
}
</script>

<style lang="scss" scoped></style>
