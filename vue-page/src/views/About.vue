<script setup>

function isMobileUserAgent() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /android|ipad|playbook|silk/i.test(userAgent);
}

const isMobile = isMobileUserAgent()

</script>

<template>
    <div class="about">
        <!-- <h1>About</h1> -->
        <div class="container">
            <div class="outercol" :class="{'outercol-mobile': isMobile}">
                <!-- Outer -->
            </div>
            <div class="innercol" :class="{'innercol-mobile': isMobile}">
                <div class="leftcol">
                    <img src="/profile_photo.png" alt="Handsome Fella" width="60%" style="border-radius: 10px; border: 2px solid #e7e7e7; box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);"/>
                    <div :class="{'leftcol-mobile': isMobile}">
                        <p style="font-weight: 600;" v-if="!isMobile">Get in touch!</p>
                        <a href="mailto:liberatorea94@gmail.com" target="_blank" class="email" style="color: #3EB489;" :class="{'email-mobile': isMobile}"> 
                            <div>
                                <img src="/email.svg" alt="Email Me" width="20%" />
                            </div>
                            <p>Email</p>
                        </a>
                        <a href="https://www.linkedin.com/in/aj-liberatore-118b551a0" target="_blank" class="linkedin" style="color: #3EB489;" :class="{'linkedin-mobile': isMobile}"> 
                            <div>
                                <img src="/linkedin.png" alt="Add me on Linkedin" width="20%"  />
                            </div>
                            <p >Linkedin</p>
                        </a>
                        <a href="https://github.com/liberatorea94" target="_blank" class="github" style="color: #3EB489;" :class="{'github-mobile': isMobile}">
                            <div>
                                <img src="/github.svg" alt="View my github" width="20%" />
                            </div>
                            <p>Github</p>
                        </a>
                    </div>
                </div>
                <div class="rightcol" :class="{'rightcol-mobile': isMobile}">
                    <p style="font-weight: 600; font-size: 24px; text-align: center;">Hi! I'm AJ.</p>
                    <p>I am a professional data scientist who has specialized in business intelligence and investigative analytics. In previous roles, I took on a variety of projects, most notably including the support of VA hiring, training, and project management initiatives as well as contributions to numerous public healthcare programs.</p>
                    <p>At my alma mater Wentworth Institute of Technology, I conducted research with professors and peers to investigate dimensional reduction in quantum gravity via diffusion which culminated in a January 2025 publication. I also took up several roles as a tutor, and graduated with high honors earning a bachelor of science in applied mathematics with a minor in data science.</p>
                    <p>In my free time, I pursue personal training and fitness, competing in bodybuilding contests since April 2023 and offering online coaching services to help others reach their goals while promoting health and wellness.</p>
                </div>
            </div>
            <div class="outercol" :class="{'outercol-mobile': isMobile}">
                <!-- Outer -->
            </div>
        </div>
    </div>
</template>

<style scoped>

.about {
    /* width: 100%; */
    /* display: flex; */
    /* box-sizing: border-box; */
    /* flex-wrap: wrap; */
    /* gap: 10px; */
    
  /* border: 1px solid; */
}

.container {
    display: flex;
    
    /* height: 1000px; */
}

.outercol {
  flex: 20%;
  /* border: 1px solid; */
}

.outercol-mobile {
    flex: 5%;
}

.innercol {
  display: flex;
  /* flex-direction: column; */
  flex: 60%;
  margin-top: 50px;
  /* overflow: hidden; */
  /* border: 1px solid; */
}

.innercol-mobile {
    flex: 90%;
    margin-top: 5%;
    flex-direction: column;
}

.leftcol {
  flex: 33.3%; 
  display: inline-block;
  /* border: 1px solid; */
}

.leftcol-mobile {
    display: flex;
    align-items: center;
}

.leftcol-mobile a {
    flex: 33%;
    /* border: 1px solid; */
}

.rightcol {
  flex: 66.7%; 
  display: inline-block; 
  /* border: 1px solid; */
  padding: 10px;
  /* box-sizing: content-box; */
}

.rightcol p {
    font-size: 20px;
    margin: 10px;
    text-align: justify;
    /* border: 1px solid; */
    /* box-sizing: border-box; */
}

.rightcol-mobile {
    padding: 0px;
}

.rightcol-mobile p {
    font-size: 14px;
}

.email {
    display: flex;
    align-items: center;
    /* border: 1px solid; */
    /* gap: 10px */
    padding: 3px;
}

.email div {
    flex: 1;
}

.email img {
    float: right; 
    padding-right: 10px;
}

.email-mobile img {
    width: 45%
}

.email p {
    flex: 1; 
    text-align: left;
}

.email-mobile p {
    font-size: 12px;
}

.linkedin {
    display: flex;
    align-items: center;
    /* border: 1px solid; */
    padding: 3px;
}

.linkedin div {
    flex: 1;
}

.linkedin img {
    float: right; 
    padding-right: 10px;
}

.linkedin-mobile img {
    width: 50%;
}

.linkedin p {
    flex: 1; 
    text-align: left;
}

.linkedin-mobile p {
    font-size: 12px;
}

.github {
    display: flex;
    align-items: center;
    /* border: 1px solid; */
    padding: 3px;
}

.github div {
    flex: 1;
}

.github img {
    float: right; 
    padding-right: 10px;
}

.github-mobile img {
    width: 50%;
}

.github p {
    flex: 1; 
    text-align: left;
}

.github-mobile p {
    font-size: 12px;
}

</style>