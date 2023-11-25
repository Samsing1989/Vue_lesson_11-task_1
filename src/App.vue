<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link :to="{ name: 'drivers' }">Водії</router-link> |
        <router-link :to="{ name: 'busses' }">Автобуси</router-link> |
        <router-link to="/definition">Призначення</router-link> |
        <router-link to="/contacts">Контакти</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    //     font-family: Avenir, Helvetica, Arial, sans-serif;
    //     -webkit-font-smoothing: antialiased;
    //     -moz-osx-font-smoothing: grayscale;
    //     text-align: center;
    //     color: #2c3e50;
    font-size: 20px;
    padding-left: 200px;
    padding-right: 200px;
}

nav {
    text-align: center;
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.button {
    transition: all 0.3s;
    padding: 5px 10px;
    background-color: #42b983;
    color: white;
    &:hover {
        background-color: #62efb0;
    }
}
.lable {
    font-size: 24px;
}
input {
    margin-bottom: 10px;
}
</style>
