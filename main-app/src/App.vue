<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link :to="microAppOne">micro-app-one</router-link> | 
      <router-link to="/micro-app-two">micro-app-two</router-link>
    </div>
    <router-view/>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name:'App',
  computed:{
    microAppOne:{
      get(){
        return process.env.NODE_ENV === 'development' ? '/micro-app-one' : '/app-vue-one'
      }
    }
  }
}
</script>
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
#container {
  /* width: 100%; */
  height: 500px;
  overflow: auto;
  border: 1px solid black;
}
</style>
