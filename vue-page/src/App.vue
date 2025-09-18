<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <div class="container">

    <div>
      <h2 style="text-align: left; padding-left: 50px; color: #3EB489;">AJ_Portfolio</h2>
        
      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  
    
    <main>
      <RouterView />
    </main>

  </div>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>

.container {
  margin: 5px;
  /* border: 1px solid; */
  box-sizing: border-box;
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  vertical-align: top;
  top: 0;
}

.main-nav {
  display: flex;
  justify-content: center;
}

.main-nav a {
  width: 150px;
  color: #3EB489;
  font-size: 30px;
  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-inline: 5px;
  background-color: #e7e7e7;
  border-radius: 10px;
}

/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
