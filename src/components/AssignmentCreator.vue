<template>
    <h2>Нове презначення</h2>
    <div>
        <label class="lable"
            >Шофер
            <select v-model="assignment.driverId">
                <option v-for="driver in getDriversList" :key="driver.id" :value="driver.id">
                    {{ driver.name }} - {{ driver.exp }}
                </option>
            </select>
        </label>
    </div>
    <div>
        <label class="lable"
            >Автобуси
            <select v-model="assignment.busId">
                <option v-for="bus in getBusesList" :key="bus.id" :value="bus.id">
                    {{ bus.number }} - {{ bus.placesNumber }}
                </option>
            </select>
        </label>
    </div>
    <button class="button" @click="onAdd">Додати призначення</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssignmentCreator',

    data() {
        return {
            assignment: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('buses', ['getBusesList']),
    },
    methods: {
        ...mapActions('assignments', ['addAssignmentAction']),
        onAdd() {
            this.addAssignmentAction(this.assignment)
            this.assignment = {}
        },
    },
}
</script>

<style lang="scss" scoped></style>
