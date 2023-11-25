<template>
    <div>
        <div>
            <label class="lable">
                Номер автобуса
                <input v-model="busData.number" type="text" />
            </label>
        </div>
        <div>
            <label class="lable">
                Кількість місць
                <input v-model="busData.placesNumber" type="text" />
            </label>
        </div>
        <button class="button" @click="onAction">{{ actionButtonTitle }}</button>
        <button class="button" @click="onCancel">Відмінити</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BusEdit',

    data() {
        return {
            busData: {},
        }
    },
    computed: {
        ...mapGetters('buses', ['getBusById']),
        receivedBusId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedBusId ? 'зберегти' : 'Створити'
        },
    },
    created() {
        this.busData = { ...this.getBusById(this.receivedBusId) }
    },
    methods: {
        ...mapActions('buses', ['addBusAction', 'upDateBusAction']),
        onAction() {
            if (!this.receivedBusId) this.addBusAction(this.busData)
            else this.upDateBusAction(this.busData)

            this.$router.push({ name: 'busses' })
        },

        onCancel() {
            this.$router.push({ name: 'busses' })
        },
    },
}
</script>

<style lang="scss" scoped></style>
