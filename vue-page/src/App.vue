<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

function isMobileUserAgent() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /android|ipad|playbook|silk/i.test(userAgent);
}

const isMobile = isMobileUserAgent()

// if (isMobileUserAgent()) {
//   console.log("This is likely a mobile device (based on user agent).");
// } else {
//   console.log("This is likely a desktop device (based on user agent).");
// }

</script>

<template>
  
  <div class="container">

    <!-- Upper skirt of the website with nav bar -->
    <div class="upperskirt" :class="{'mobile-skirt': isMobile}">
      <div class="outercol">
        <p class="title" :class="{'title-mobile': isMobile}">AJ_Portfolio</p>
        <!-- <p v-if="isMobile">Hello Mobile Users!</p> -->
      </div>
      <div class="middlecol">
        <nav class="main-nav" v-if="!isMobile">
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/experience">Experience</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/resume">Resume</RouterLink>
        </nav>

        <nav class="main-nav-mobile" v-if="isMobile">
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
    <main style="overflow: hidden;">
      <!-- <RouterView /> -->
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

  </div>
</template>

<style scoped>

/* Entering state of the new component */
    .fade-enter-from {
      opacity: 0;
      transform: translateY(-5px);
    }

    /* Active entering transition */
    .fade-enter-active {
      transition: all 0.3s ease-out;
    }

    /* Leaving state of the old component */
    .fade-leave-to {
      opacity: 0;
      transform: translateY(5px);
    }

    /* Active leaving transition */
    .fade-leave-active {
      transition: all 0.3s ease-in;
    }

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

.mobile-skirt {
  flex-direction: column;
}

.outercol {
  flex: 33.3%;
  display: inline-block;
  /* height: fit-content; */
  /* display: flex; */
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
  /* border: 1px solid; */
}

.title-mobile {
  padding-left: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.main-nav {
  display: flex;
  justify-content: center;
}

.main-nav a {
  width: 170px;
  /* width: 25%; */
  color: #3EB489;
  font-size: 30px;
  font-weight: 600;
  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-inline: 10px;
  /* border: 1px solid; */
  /* background-color: #e7e7e7; */
  /* border-radius: 10px; */
}

.main-nav a.router-link-exact-active {
  border-bottom: 3px solid #3EB489; /* Your desired border color */
  /* box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.35); */
}

.main-nav-mobile {
  display: flex;
  justify-content: center;
  /* border: 1px solid; */
}

.main-nav-mobile a {
  width: 80px;
  /* width: 25%; */
  /* flex-basis: 25%; */
  color: #3EB489;
  font-size: 14px;
  font-weight: 600;
  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-inline: 8px;
  /* border: 1px solid; */
  /* background-color: #e7e7e7; */
  /* border-radius: 10px; */
}

.main-nav-mobile a.router-link-exact-active {
  border-bottom: 3px solid #3EB489; /* Your desired border color */
  /* box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.35); */
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
