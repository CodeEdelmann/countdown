<template>
  <div id="app">
    <!-- TODO Separate into Nav Component -->
    <!-- TODO Simplify! -->
    <router-link v-if="this.$router.currentRoute.name == 'detail'" :to="{name: 'form'}">
      Create a new countdown
    </router-link>
    <router-link v-else-if="this.$router.currentRoute.name == 'form' && this.$store.state.countdown_uuid != ''" :to="{name: 'detail', params: {'uuid': this.$store.state.countdown_uuid}}">
      Return to prior countdown
    </router-link>
    <!-- TODO Separate into ErrorMessage component -->
    <div v-if="this.$store.getters.error_message">
      {{ this.$store.getters.error_message }}
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
