<script setup>

// import Carousel from 'primevue/carousel'
import Card from 'primevue/card'
import Button from 'primevue/button';
import { ref, reactive } from 'vue'

// const responsiveOptions = ref([
//     {
//         breakpoint: '1400px',
//         numVisible: 2,
//         numScroll: 1
//     },
//     {
//         breakpoint: '1199px',
//         numVisible: 3,
//         numScroll: 1
//     },
//     {
//         breakpoint: '767px',
//         numVisible: 2,
//         numScroll: 1
//     },
//     {
//         breakpoint: '575px',
//         numVisible: 1,
//         numScroll: 1
//     }
// ]);

const projects = [

    { title: 'Anomalous diffusion and factor ordering in (1+ 1)-dimensional Lorentzian quantum gravity', date: new Date('12/17/2024'), type: 'publication',
        description: 'Authored by Elijah Sanderson (sandersone1@wit.edu), Rachel Lash Maitra (maitrar@wit.edu), AJ Liberatore (liberatorea94@gmail.com). Published in journal Nuclear Physics B on December 17, 2024.',
        link: 'https://doi.org/10.1016/j.nuclphysb.2024.116779',
        img: '/AJ_Portfolio/nuclearphysicsb.png'
     },
     { title: 'A Hybrid System Dynamics/Input-Output Model for Studying the Impact of Transportation Delays on the Resiliency of National Supply Chains', date: new Date('01/31/2024'), type: 'publication',
        description: 'Authored by William S. Bland (wbland@mitre.org), Lissette Escobar (lescobar@mitre.org), Andrew E. Hong (ahong@mitre.org), Grace Kenneally (gkenneally@mitre.org), AJ Liberatore (liberatorea94@gmail.com), Scott L. Rosen (srosen@mitre.org). Published in journal Institute of Electronical and Electronics Engineers on Janyary 31, 2024.',
        link: 'https://doi.org/10.1109/WSC60868.2023.10407498',
        img: '/AJ_Portfolio/ieee.png'
     },
     { title: 'ACAGPM', date: new Date('05/01/2022'), type: 'career',
        description: 'R package authored by AJ Liberatore (liberatorea94@gmail.com) and Principal Investigator Hannah De los Santos, PhD (hdelossantos@mitre.org).',
        link: 'https://github.com/mitre/ACAGPM',
        img: '/AJ_Portfolio/mitre.png'
     },
    //  { title: 'Donut', date: '', type: '',
    //     description: '',
    //     link: '',
    //     img: ''
    //  },
    //  { title: 'Espresso', date: '', type: '',
    //     description: '',
    //     link: '',
    //     img: ''
    //  },
    //  { title: 'Fudge', date: '', type: '',
    //     description: '',
    //     link: '',
    //     img: ''
    //  },
    //  { title: 'Granola', date: '', type: '',
    //     description: '',
    //     link: '',
    //     img: ''
    //  },

]

const typeArray = reactive(['all'])
typeArray.push(...projects.map(project => project.type))
const typeOptions = new Set(typeArray)

const selectedType = ref('all')

const yearArray = reactive(['all'])
yearArray.push(...projects.map(project => project.date.getFullYear()))
const yearOptions = new Set(yearArray)

const selectedYear = ref('all')

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function filterProjects() {

    var projArray = [...projects];
 
    if (selectedType.value != 'all') {
        projArray = projArray.filter(item => item.type == selectedType.value) 
    } 

    if (selectedYear.value != 'all') {
        projArray = projArray.filter(item => item.date.getFullYear() == selectedYear.value)
    }

    return projArray;
}

function isMobileUserAgent() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /android|ipad|playbook|silk/i.test(userAgent);
}

const isMobile = isMobileUserAgent()

</script>

<template>
    <div class="projects">
        <!-- <h1>Projects</h1> -->
        <div class="container">

            <div class="outercol" :class="{'outercol-mobile': isMobile}">
                <!-- Outer -->
            </div>
            <div class="innercol" :class="{'innercol-mobile': isMobile}">
                <p style="font-weight: 600; font-size: 24px; text-align: center;">Take a look at my track record.</p>

                <!-- <div class="carousel">

                    <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="5000">
                        <template #item="slotProps">

                            <div class="carousel-card">
                                
                                <div>{{ slotProps.data.title }}</div>

                            </div>


                        </template>
                    </Carousel>

                </div> -->

                <div class="filter">

                    <h3 style="text-align: right; font-weight: 600;">Filter:</h3>

                    <select v-model="selectedType" class="customized-select">
                        <option value="" disabled selected>Please select type</option>
                        <option v-for="option in typeOptions" :key="option" :value="option">
                            {{ capitalizeFirstLetter(option) }}
                        </option>
                    </select>

                    <select v-model="selectedYear" class="customized-select">
                        <option value="" disabled selected>Please select year</option>
                        <option v-for="option in yearOptions" :key="option" :value="option">
                            {{ capitalizeFirstLetter(option) }}
                        </option>
                    </select>

                    <!-- <select>
                        <option value="" disabled selected>Please select skill</option>
                    </select> -->

                </div>
                    
                <div class="cards">

                    <Card v-for="project in filterProjects()" class="card" :class="{'card-mobile': isMobile}">
                        
                            <template #header v-if="project.img"> 
                                <img :src=project.img :alt=project.title style="width: 100%; top: -50px; left: 0px; position: absolute;" :class="{'p-card-header-mobile': isMobile}"/>
                            </template>

                            <template #title>
                                <div :class="{'p-card-title-mobile': isMobile}">
                                    {{ project.title }}
                                </div>
                            </template>

                            <template #subtitle>
                                <div :class="{'p-card-subtitle-mobile': isMobile}">
                                    {{ capitalizeFirstLetter(project.type) }}
                                </div>
                            </template>

                            <template #content>
                                <div :class="{'p-card-content-mobile': isMobile}">
                                    {{ project.description }}
                                </div>
                            </template>

                            <template #footer v-if="project.link">
                                <Button as='a' icon="pi pi-link" :href=project.link target="_blank" style="color: #3EB489; background-color: transparent; border: 0px;" size="large"/>
                            </template>

                    </Card>

                </div>

            </div>
            <div class="outercol" :class="{'outercol-mobile': isMobile}">
                <!-- Outer -->
            </div>
        </div>
    </div>
</template>

<style scoped>

.projects {

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
    /* display: flex; */
    flex: 60%;
  margin-top: 50px;
    /* padding: 10px; */
    /* border: 1px solid; */
}

.innercol-mobile {
    flex: 90%;
    margin-top: 10px;
    flex-direction: column;
}

.carousel {

}

.carousel-card {
    border: 2px solid #e7e7e7;
    margin: 5px;
    border-radius: 10px;
    height: 600px
}

.filter {
    display: flex;
}

.filter * {
    margin: 10px;
    flex: 1;
}

.customized-select {
    text-align: center;
    margin-bottom: 15px;
    font-family: "Roboto Slab", serif;
    font-size: 14px;
}

.cards {
    display: flex;
    flex-wrap: wrap;
}

.card {
    /* px count must align with margin. */
    margin: 10px;
    width: calc(100% / 3 - (10px * 2));
    box-sizing: border-box;
    border: 2px solid #e7e7e7;
    height: 500px;
    padding: 0px;
    border-radius: 10px;
    position: relative;
    
    /* box-shadow: none; */
}

.card-mobile {
    margin: 5px;
    width: calc(100% / 2 - (5px * 2));
    height: 300px;
}

:deep(.card) .p-card-header {
    /* border: 1px solid; */
    height: 40%;
    overflow: hidden;
    position: relative;
    border-radius: 10px 10px 0px 0px;
}

:deep(.card) .p-card-header {
    height: 20%;
}

:deep(.card) .p-card-title {
    /* border: 1px solid; */
    font-size: 18px;
    /* height: 50%; */
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

:deep(.card) .p-card-title-mobile {
    font-size: 14px;
}

:deep(.card) .p-card-subtitle-mobile {
    font-size: 12px;
}

:deep(.card) .p-card-content {
    /* border: 1px solid; */
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}

:deep(.card) .p-card-content-mobile {
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

:deep(.card) .p-card-footer {
    position: absolute;
    bottom: 0px;
    left: 50%; 
    transform: translateX(-50%);
    padding: 10px;
}

</style>