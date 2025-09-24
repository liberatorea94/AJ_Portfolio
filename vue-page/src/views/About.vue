<script setup>

</script>

<template>
    <div class="about">
        <!-- <h1>About</h1> -->
        <div class="container">
            <div class="outercol">
                <!-- Outer -->
            </div>
            <div class="innercol">
                <div class="leftcol">
                    <img src="/AJ_Portfolio/profile_photo.png" alt="Handsome Fella" width="60%" style="border-radius: 10px; border: 2px solid #e7e7e7; box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);"/>
                    <p style="font-weight: 600;">Get in touch!</p>
                    <a href="mailto:liberatorea94@gmail.com" target="_blank" class="email" style="color: #3EB489;"> 
                        <div>
                            <img src="/AJ_Portfolio/email.svg" alt="Email Me" width="20%" />
                        </div>
                        <p>Email</p>
                    </a>
                    <a href="https://www.linkedin.com/in/aj-liberatore-118b551a0" target="_blank" class="linkedin" style="color: #3EB489;">
                        <div>
                            <img src="/AJ_Portfolio/linkedin.png" alt="Add me on Linkedin" width="20%"  />
                        </div>
                        <p >Linkedin</p>
                    </a>
                    <a href="https://github.com/liberatorea94" target="_blank" class="github" style="color: #3EB489;">
                        <div>
                            <img src="/AJ_Portfolio/github.svg" alt="View my github" width="20%" />
                        </div>
                        <p>Github</p>
                    </a>
                </div>
                <div class="rightcol">
                    <p style="font-weight: 600; font-size: 24px; text-align: center;">Hi! I'm AJ.</p>
                    <p>I am a professional data scientist who has specialized in business intelligence and investigative analytics. In previous roles, I took on a variety of projects, most notably including the support of VA hiring, training, and project management initiatives as well as contributions to numerous public healthcare programs.</p>
                    <p>At my alma mater Wentworth Institute of Technology, I conducted research with professors and peers to investigate dimensional reduction in quantum gravity via diffusion which culminated in a January 2025 publication. I also took up several roles as a tutor, and graduated with high honors earning a bachelor of science in applied mathematics with a minor in data science.</p>
                    <p>In my free time, I pursue personal training and fitness, competing in bodybuilding contests since April 2023 and offering online coaching services to help others reach their goals while promoting health and wellness.</p>
                </div>
            </div>
            <div class="outercol">
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

.innercol {
  display: flex;
  flex: 60%;
  margin-top: 50px;
  /* overflow: hidden; */
  /* border: 1px solid; */
}

.leftcol {
  flex: 33.3%; 
  display: inline-block;
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

.email p {
    flex: 1; 
    text-align: left;
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

.linkedin p {
    flex: 1; 
    text-align: left;
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

.github p {
    flex: 1; 
    text-align: left;
}

</style>