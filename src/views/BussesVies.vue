<template>
    <div>
        <ul>
            <li v-for="bus in getBusesList" :key="bus.id">
                {{ bus.number }} - {{ bus.placesNumber }}
                <button class="button" @click="onEdit(bus.id)">Редагувати</button>
                <button class="button" @click="deleteBusAction(bus.id)">Видалити</button>
            </li>
        </ul>
        <router-link :to="{ name: 'busses-config' }">Додати автобус</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'BussesVies',
    computed: {
        ...mapGetters('buses', ['getBusesList']),
    },
    created() {
        this.deleteBusAction()
    },
    methods: {
        ...mapActions('buses', ['deleteBusAction']),

        onEdit(busId) {
            this.$router.push({
                name: 'busses-config',
                params: {
                    id: busId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
