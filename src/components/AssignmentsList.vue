<template>
    <h1>Призначення</h1>
    <div>
        <div v-for="assignment in getFilledAssignmentsList" :key="assignment.id">
            {{ assignment.driverName }} - {{ assignment.busNumber }}
            <button class="button" @click="deleteAssignmentActive(assignment.id)">Видалити</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssignmentsList',
    computed: {
        ...mapGetters('assignments', ['getFilledAssignmentsList']),
    },
    methods: {
        ...mapActions('assignments', ['deleteAssignmentActive']),
    },
}
</script>

<style lang="scss" scoped></style>
