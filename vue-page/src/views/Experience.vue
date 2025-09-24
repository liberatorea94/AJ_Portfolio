# TODO
# https://www.google.com/search?q=primevue+change+length+of+connector+between+events+by+date&sca_esv=9594ada01a48a169&sxsrf=AE3TifPBnbgx1oK0oHSDn_zdUouEcljIWQ%3A1758563458701&ei=gozRaIbOKqSFw8cPnLXJuQ4&ved=0ahUKEwiGl5Wy9-yPAxWkwvACHZxaMucQ4dUDCBA&uact=5&oq=primevue+change+length+of+connector+between+events+by+date&gs_lp=Egxnd3Mtd2l6LXNlcnAiOnByaW1ldnVlIGNoYW5nZSBsZW5ndGggb2YgY29ubmVjdG9yIGJldHdlZW4gZXZlbnRzIGJ5IGRhdGUyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBUjhOlD-CVixOXAGeAGQAQCYAZwBoAH-CqoBAzYuN7gBA8gBAPgBAZgCE6ACoQvCAgoQABiwAxjWBBhHwgIEECMYJ8ICCBAAGIAEGKIEwgIFEAAY7wXCAgUQIRirApgDAIgGAZAGCJIHBDEyLjegB-VusgcDNi43uAeWC8IHBDMuMTbIBxk&sclient=gws-wiz-serp#cobssid=s
# https://www.google.com/search?q=primevue+timeline+overlapping+events&oq=primevue+timeline+overlapping+events&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRifBdIBCDc5MTNqMGo3qAIIsAIB8QWCPv7NqdopRA&sourceid=chrome&ie=UTF-8

<script setup>

import Timeline from 'primevue/timeline';
import Tag from 'primevue/tag';
import { ref } from 'vue';

const events = [
    { title: 'Current Day', date: '09/01/2025', icon: 'pi pi-shopping-cart', color: '#9C27B0', type: 'career',
        description: 'Looking for my next opportunity to make a difference. Reach out!'
     },
    { title: 'MITRE: Data Scientist', date: '04/01/2025', icon: 'pi pi-cog', color: '#673AB7', type: 'career', 
        description: '2 years after I joined MITRE, in May 2023, I was promoted to Data Scientist. I continued to grow and produce valuable work, acting as a SME for Power BI related tasks. I developed and deployed RShiny dashboards in AWS to support defense and internal collaboration intiatives, including an organizational nework analysis at MITRE. Additionally, I led development of a Django + Vue.js supply chain dashoard, integrating machine learning outputs into interactive visuals while mentoring an intern. I wrapped up my time at MITRE with work on data management plans for sponsors, and analysis of large-scale VA medical/surgical supply chain data. For the latter, I produced weekly reports to identify trends and drive policy updates that improve efficiency and reduce waste.'
    },
    { title: '2025', date: '01/01/2025', type: 'year' },
    { title: 'Publication: Anomolous Diffusion', date: '12/01/2024', icon: 'pi pi-cog', color: '#673AB7', type: 'project',
        link: 'https://doi.org/10.1016/j.nuclphysb.2024.116779'
     },
    { title: 'Publicaiton: Hybrid System', date: '01/01/2024', icon: 'pi pi-cog', color: '#673AB7', type: 'project', 
        link: 'https://ieeexplore.ieee.org/document/10407498'
     },
    { title: '2024', date: '01/01/2024', type: 'year' },
    { title: 'MITRE: Associate Data Scientist', date: '05/01/2023', icon: 'pi pi-cog', color: '#673AB7', type: 'career',
        description: 'In May 2021, I joined MITRE as an Associate Data Scientist. In my first role out of undergrad, I quickly made impactful contributions, leading the development of dashboards and data tools for federal sponsors including Power BI solutions used by VA senior leadership and the CDC. I tackled problems related to social determinants of health, visualizing environmental and health indicators, and developing the ACAGPM R package to assist other researchers. I also gained experience with intricate machine learning workflows, creating an NLP sentiment analysis pipeline and assisting in implementation of a staffing prediction algorithm.'
     },
    { title: '2023', date: '01/01/2023', type: 'year' },
    { title: '2022', date: '01/01/2022', type: 'year' },
    { title: 'Wentworth: Undergraduate', date: '08/01/2021', icon: 'pi pi-shopping-cart', color: '#FF9800', type: 'career', 
        description: 'I attended Wentworth Institute of technology, where I pursued a Bachelor of Science in Applied Mathematics and a minor in Data Science. Alongside my role as a student, I was a peer tutor sophomore year through graduation, assisting others with succeeding in their mathematics courses. I also conducted research in collaboration with a professor and peer on the topic of quantum gravity, with the aims of making new discoveries in the field related to dimensional reduction.'
     },
     { title: '2021', date: '01/01/2021', type: 'year' },
     { title: '2020', date: '01/01/2020', type: 'year' },
     { title: '2019', date: '01/01/2019', type: 'year' },
    { title: 'Start School', date: '08/01/2018', icon: 'pi pi-check', color: '#607D8B', type: 'project' }
];

// function isTransparent(type) {
//     return type === 'career';
// }

// function getTypeClass(type) {
//     return 'event-${type}';
// }

const selected = ref('all')
const options = [
    { text: 'All', value: 'all' }, 
    { text: 'Language', value: 'language' },
    { text: 'Frameworks/Libraries', value: 'library' },
    { text: 'AI/ML', value: 'ml' },
    { text: 'Cloud Platforms', value: 'cloud' },
    { text: 'DevOps/Software', value: 'software' },
    { text: 'Data Viz', value: 'viz' },
    { text: 'Techniques', value: 'technique' },
]

const skillTags = [
    // Languages
    { value: 'Python', skill: 'language' },
    { value: 'Java', skill: 'language' },
    { value: 'SQL', skill: 'language' },
    { value: 'R', skill: 'language' },
    { value: 'Javascript', skill: 'language' },

    // Frameworks/Libraries
    { value: 'PyTorch', skill: 'library' },
    { value: 'Django', skill: 'library' },
    { value: 'Vue.js', skill: 'library' },
    { value: 'RShiny', skill: 'library' },

    // Machine Learning
    { value: 'Sentiment Analysis', skill: 'ml' },
    { value: 'Generative AI', skill: 'ml' },
    { value: 'NLP', skill: 'ml' },
    { value: 'Model Deployment (RShiny Apps)', skill: 'ml' },

    // Cloud Platforms
    { value: 'AWS', skill: 'cloud' },
    { value: 'Lambda', skill: 'cloud' },
    { value: 'EC2', skill: 'cloud' },
    { value: 'S3', skill: 'cloud' },
    { value: 'ECS', skill: 'cloud' },
    { value: 'Docker', skill: 'cloud' },

    // Software & DevOps
    { value: 'Git', skill: 'software' },
    { value: 'Github', skill: 'software' },
    { value: 'Linux', skill: 'software' },
    { value: 'REST APIs', skill: 'software' },
    { value: 'SQL Server Management Studio', skill: 'software' },
    { value: 'PostgreSQL', skill: 'software' },
    { value: 'Adobe Suite', skill: 'software' },
    { value: 'MO365', skill: 'software' },

    // Data Visualization
    { value: 'Power BI', skill: 'viz' },
    { value: 'Tableau', skill: 'viz' },
    { value: 'Gephi', skill: 'viz' },
    { value: 'Power Query', skill: 'viz' },
    { value: 'DAX', skill: 'viz' },

    // Techniques
    { value: 'Full-Stack Development', skill: 'technique' },
    { value: 'Business Intelligence', skill: 'technique' },
    { value: 'Data Warehousing', skill: 'technique' },
    { value: 'UX/UI', skill: 'technique' },
    { value: 'Data Pipelines', skill: 'technique' },
    { value: 'Network Analysis', skill: 'technique' },
];

function filterSkillTags() {
    if (this.selected == 'all') {
        return this.skillTags;
    }
    return (this.skillTags.filter(item => item.skill == this.selected) )
}

</script>

<template>

    <div class="experience">
        <!-- <h1>Experience</h1> -->
        <div class="container">

            <div class="outercol">
                <!-- Outer -->
            </div>
            <div class="innercol">
                <div class="leftcol">
                    <p style="font-weight: 600; font-size: 24px; text-align: center;">What, Where, When, & Why</p>
                    <div class="timeline">

                        
                        <Timeline :value="events" class="customized-timeline">
                            <template #content="slotProps" >
                                <div :class="{'transparent-div': slotProps.item.type === 'project' || slotProps.item.type === 'year'}" >
                                    <h3> {{ slotProps.item.title }} </h3>
                                    <p style="text-align: justify;"> {{ slotProps.item.description }} </p>
                                </div>
                            </template>
                            <template #opposite="slotProps">
                                <div :class="{'transparent-div': slotProps.item.type === 'career', 'event-year': slotProps.item.type === 'year'}" >
                                    <a v-if="slotProps.item.link" :href="slotProps.item.link" target="_blank" style="color: #3EB489;">{{ slotProps.item.title }}</a>
                                    <div v-else>{{ slotProps.item.title }}</div>
                                </div>
                            </template>
                            
                        </Timeline>

                    </div>

                </div>
                <div class="rightcol">
                    <p style="font-weight: 600; font-size: 24px; text-align: center;">How</p>
                    <div class="skills">
                        <select v-model="selected" class="customized-select">
                            <option v-for="option in options" :key="option.value" :value="option.value">
                                {{ option.text }}
                            </option>
                        </select>

                        <div class="customized-tags">
                            <Tag v-for="skill in filterSkillTags()" :value='skill.value'></Tag>
                        </div>

                    </div>
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
  margin-top: 50px;
  /* padding: 10px; */
  /* border: 1px solid; */
  
}

.leftcol {
  flex: 66.7%; 
  display: inline-block;
  /* border: 1px solid; */
  
}

.rightcol {
  flex: 33.3%; 
  display: inline-block; 
  /* border: 1px solid; */
}

.timeline {
    /* border: 1px solid; */
    height: 2000px;
    display:inline-block;
    /* overflow: hidden; */
    /* width: 200px; */
}

.customized-timeline {
    /* border: 1px solid; */
    padding: 50px;
    width:
}

:deep(.customized-timeline) .p-timeline-event {
  margin: 3px; /* Adds space between each event */
  /* border: 1px solid; */
}

:deep(.customized-timeline) .p-timeline-event-opposite {
  flex: 1; /* Makes the opposite section smaller */
}

:deep(.customized-timeline) .p-timeline-event-content {
  flex: 2; /* Makes the content section larger */
}

.transparent-div {
    opacity: 0;
}

.event-year {
    opacity: 0.5;
}

.skills {
    height: 1000px;
    padding: 50px;
    /* border: 1px solid; */
}

.customized-select {
    text-align: center;
    margin-bottom: 15px;
    font-family: "Roboto Slab", serif;
    font-size: 14px;
}

/* .customized-select .option {
    font-weight: 900;
} */

.customized-tags .p-tag{
    /* border: 1px solid; */
    margin: 5px;
    color: white;
    background-color: #3EB489;
    box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    /* border: 1px solid #3EB489; */
}

</style>