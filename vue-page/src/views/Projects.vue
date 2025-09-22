<script setup>

import Carousel from 'primevue/carousel'
import Card from 'primevue/card'
import { ref } from 'vue'

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const projects = [

    { title: 'Apple', date: '', type: '',
        description: '',
        link: '',
        img: ''
     },
     { title: 'Banana', date: '', type: '',
        description: '',
        link: '',
        img: ''
     },
     { title: 'Cookie', date: '', type: '',
        description: '',
        link: '',
        img: ''
     },
     { title: 'Donut', date: '', type: '',
        description: '',
        link: '',
        img: ''
     },
     { title: 'Espresso', date: '', type: '',
        description: '',
        link: '',
        img: ''
     },
     { title: 'Fudge', date: '', type: '',
        description: '',
        link: '',
        img: ''
     },
     { title: 'Granola', date: '', type: '',
        description: '',
        link: '',
        img: ''
     },

]

</script>

<template>
    <div class="projects">
        <h1>Projects</h1>
        <div class="container">

            <div class="outercol">
                <!-- Outer -->
            </div>
            <div class="innercol">
                <h2>Take a look at my track record.</h2>

                <div class="carousel">

                    <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="5000">
                        <template #item="slotProps">

                            <div class="carousel-card">
                                
                                <div>{{ slotProps.data.title }}</div>

                            </div>


                        </template>
                    </Carousel>

                </div>

                <div class="filter">
                    <h3 style="text-align: right; font-weight: 600;">Filter:</h3>
                    <select>
                        <option value="" disabled selected>Please select type</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Please select year</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Please select skill</option>
                    </select>
                </div>
                    
                <div class="cards">

                    <Card v-for="project in projects" class="card">
                        <template #title>{{ project.title }}</template>
                        <template #content>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
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
    /* padding: 10px; */
    /* border: 1px solid; */
}

.carousel {

}

.carousel-card {
    border: 2px solid #e7e7e7;
    margin: 5px;
    border-radius: 10px;
    height: 400px
}

.filter {
    display: flex;
}

.filter * {
    margin: 10px;
    flex: 1;
}

.cards {
    display: flex;
    flex-wrap: wrap;
}

.card {
    margin: 10px;
    flex-basis: calc(100% / 3 - (10px * 2)); /* px count must align with margin. */
    box-sizing: border-box;
    border: 2px solid #e7e7e7;
}

</style>