<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import maintenanceService, { MaintenanceResponse } from './services/maintenance-service';
export default {
  name: 'app',
  created() {
    maintenanceService.maintenanceList().then((data: MaintenanceResponse) => {

    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
