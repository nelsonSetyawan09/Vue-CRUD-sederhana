<template>
  <div id="app">
    <Header/>
    <div class="container">
        <!-- Page Content goes here -->
        
         <router-view></router-view>
        <!-- <Users /> -->
      </div>
    
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
