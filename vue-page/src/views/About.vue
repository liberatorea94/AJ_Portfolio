<script setup>

</script>

<template>
    <div class="about">
        <h1>About</h1>
        <div class="container">
            <div class="outercol">
                <!-- Outer -->
            </div>
            <div class="innercol">
                <div class="leftcol">
                    <img src="/AJ_Portfolio/profile_placeholder.png" alt="Handsome Fella" width="80%" style="border-radius: 10px;"/>
                    <p style="font-weight: bold;">Get in touch!</p>
                    <a href="mailto:liberatorea94@gmail.com" target="_blank" class="email">
                        <div>
                            <img src="/AJ_Portfolio/email.svg" alt="Email Me" width="20%" />
                        </div>
                        <p>Email</p>
                    </a>
                    <a href="https://www.linkedin.com/in/aj-liberatore-118b551a0" target="_blank" class="linkedin">
                        <div>
                            <img src="/AJ_Portfolio/linkedin.png" alt="Add me on Linkedin" width="20%"  />
                        </div>
                        <p >Linkedin</p>
                    </a>
                    <a href="https://github.com/liberatorea94" target="_blank" class="github">
                        <div>
                            <img src="/AJ_Portfolio/github.svg" alt="View my github" width="20%" />
                        </div>
                        <p>Github</p>
                    </a>
                </div>
                <div class="rightcol">
                    <h2>My Story</h2>
                    <p>AJ Liberatore is a professional data scientist who has specialized in business intelligence and investigative analytics. In previous roles, he has taken on a variety of projects, most notably including the support of VA hiring, training, and project management initiatives as well as contributions to numerous public healthcare programs.</p>
                    <p>At his alma mater Wentworth, he conducted research with professors and peers to investigate dimensional reduction in quantum gravity via diffusion which culminated in a January 2025 publication, took up several roles as a tutor, and graduated with high honors earning a bachelor’s of science in applied mathematics with a minor in data science.</p>
                    <p>In his free time, AJ pursues personal training and fitness, competing in bodybuilding contests since April 2023 and offering online coaching services to help others reach their goals while promoting health and wellness.</p>
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
  /* padding: 10px; */
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
}

.rightcol p {
    font-size: 20px;
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