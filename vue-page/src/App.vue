<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <div class="container">

    <!-- Upper skirt of the website with nav bar -->
    <div class="upperskirt">
      <div class="outercol">
        <h2 class="title">AJ_Portfolio</h2>
      </div>
      <div class="middlecol">
        <nav class="main-nav">
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/experience">Experience</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/resume">Resume</RouterLink>
        </nav>
      </div>
      <div class="outercol">
      </div>
    </div>
  
    <!--  -->
    <main>
      <RouterView />
    </main>

  </div>
</template>

<style scoped>

.container {
  /* margin: 5px; */
  /* border: 1px solid; */
  box-sizing: border-box;
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.upperskirt {
  background-color: #D3D3D3;
}

.outercol {
  width: 33.3%;
  display: inline-block;
}

.middlecol {
  width: 33.3%;
  display: inline-block;
}

.title {
  text-align: left;
  padding-left: 50px;
  color: #3EB489;
}

.main-nav {
  display: flex;
  justify-content: center;
}

.main-nav a {
  width: 170px;
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
