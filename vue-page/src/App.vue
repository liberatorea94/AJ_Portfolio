<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <div class="container">

    <!-- Upper skirt of the website with nav bar -->
    <div class="upperskirt">
      <div class="outercol">
        <p class="title">AJ_Portfolio</p>
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

  overflow-y: auto;
  scrollbar-gutter: stable;

  /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Internet Explorer and Edge */
  -ms-overflow-style: none;
  /* padding-left: calc(100vw - 100%); */
}

.upperskirt {
  background-color: #e3e3e3;
  display: flex;
  align-items: center;
}

.outercol {
  flex: 33.3%;
  display: inline-block;
  /* border: 1px solid; */
}

.middlecol {
  flex: 33.4%;
  display: inline-block;
  /* border: 1px solid; */
}

.title {
  text-align: left;
  padding-left: 50px;
  color: #3EB489;
  font-size: 30px;
  font-weight: 400;
}

.main-nav {
  display: flex;
  justify-content: center;
}

.main-nav a {
  width: 170px;
  color: #3EB489;
  font-size: 30px;
  font-weight: 600;
  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-inline: 5px;
  /* border: 1px solid; */
  /* background-color: #e7e7e7; */
  /* border-radius: 10px; */
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
