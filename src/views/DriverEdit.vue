<template>
    <div>
        <div>
            <label class="lable">
                ПІБ
                <input v-model="driverData.name" type="text" />
            </label>
        </div>
        <div>
            <label class="lable">
                Стаж
                <input v-model="driverData.exp" type="text" />
            </label>
        </div>
        <button class="button" @click="onAction">{{ actionButtonTitle }}</button>
        <button class="button" @click="onCancel">Відмінити</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DriverEdit',
    data() {
        return {
            driverData: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverById']),
        receivedDriverId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedDriverId ? 'зберегти' : 'Створити'
        },
    },
    created() {
        this.driverData = { ...this.getDriverById(this.receivedDriverId) }
    },
    methods: {
        ...mapActions('drivers', ['addDriverAction', 'upDateDriverActive']),
        onAction() {
            if (!this.receivedDriverId) this.addDriverAction(this.driverData)
            else this.upDateDriverActive(this.driverData)

            this.$router.push({ name: 'drivers' })
        },

        onCancel() {
            this.$router.push({ name: 'drivers' })
        },
    },
}
</script>

<style lang="scss" scoped></style>
