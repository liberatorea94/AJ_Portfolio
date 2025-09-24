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

    var projArray = [...this.projects];
 
    if (this.selectedType != 'all') {
        projArray = projArray.filter(item => item.type == this.selectedType) 
    } 

    if (this.selectedYear != 'all') {
        projArray = projArray.filter(item => item.date.getFullYear() == this.selectedYear)
    }

    return projArray;
}

</script>

<template>
    <div class="projects">
        <!-- <h1>Projects</h1> -->
        <div class="container">

            <div class="outercol">
                <!-- Outer -->
            </div>
            <div class="innercol">
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

                    <Card v-for="project in filterProjects()" class="card">
                        
                            <template #header v-if="project.img"> 
                                <img :src=project.img :alt=project.title style="width: 100%; top: -50px; left: 0px; position: absolute;" />
                            </template>

                            <template #title>
                                {{ project.title }}
                            </template>

                            <template #subtitle>
                                {{ capitalizeFirstLetter(project.type) }}
                            </template>

                            <template #content>
                                {{ project.description }}
                            </template>

                            <template #footer v-if="project.link">
                                <Button as='a' icon="pi pi-link" :href=project.link target="_blank" style="color: #3EB489; background-color: transparent; border: 0px;" size="large"/>
                            </template>

                    </Card>

                </div>

            </div>
            <div class="outercol">
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

.innercol {
    /* display: flex; */
    flex: 60%;
  margin-top: 50px;
    /* padding: 10px; */
    /* border: 1px solid; */
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
    margin: 10px;
    width: calc(100% / 3 - (10px * 2)); /*px count must align with margin.*/
    box-sizing: border-box;
    border: 2px solid #e7e7e7;
    height: 500px;
    padding: 0px;
    border-radius: 10px;
    position: relative;
    
    /* box-shadow: none; */
}

:deep(.card) .p-card-header {
    /* border: 1px solid; */
    height: 40%;
    overflow: hidden;
    position: relative;
    border-radius: 10px 10px 0px 0px;
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

:deep(.card) .p-card-content {
    /* border: 1px solid; */
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
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