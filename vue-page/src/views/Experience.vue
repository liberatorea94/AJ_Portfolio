# TODO
# https://www.google.com/search?q=primevue+change+length+of+connector+between+events+by+date&sca_esv=9594ada01a48a169&sxsrf=AE3TifPBnbgx1oK0oHSDn_zdUouEcljIWQ%3A1758563458701&ei=gozRaIbOKqSFw8cPnLXJuQ4&ved=0ahUKEwiGl5Wy9-yPAxWkwvACHZxaMucQ4dUDCBA&uact=5&oq=primevue+change+length+of+connector+between+events+by+date&gs_lp=Egxnd3Mtd2l6LXNlcnAiOnByaW1ldnVlIGNoYW5nZSBsZW5ndGggb2YgY29ubmVjdG9yIGJldHdlZW4gZXZlbnRzIGJ5IGRhdGUyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBUjhOlD-CVixOXAGeAGQAQCYAZwBoAH-CqoBAzYuN7gBA8gBAPgBAZgCE6ACoQvCAgoQABiwAxjWBBhHwgIEECMYJ8ICCBAAGIAEGKIEwgIFEAAY7wXCAgUQIRirApgDAIgGAZAGCJIHBDEyLjegB-VusgcDNi43uAeWC8IHBDMuMTbIBxk&sclient=gws-wiz-serp#cobssid=s
# https://www.google.com/search?q=primevue+timeline+overlapping+events&oq=primevue+timeline+overlapping+events&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRifBdIBCDc5MTNqMGo3qAIIsAIB8QWCPv7NqdopRA&sourceid=chrome&ie=UTF-8

<script setup>

import Timeline from 'primevue/timeline';
import Tag from 'primevue/tag';
import { ref } from 'vue';

const events = [
    { title: 'Current Day', date: '09/01/2025', icon: 'pi pi-shopping-cart', color: '#9C27B0', type: 'career',
        description: 'Looking for my next opportunity to make a difference.'
     },
    { title: 'MITRE: Data Scientist', date: '04/01/2025', icon: 'pi pi-cog', color: '#673AB7', type: 'career', 
        description: 'I supported data science efforts focused on federal healthcare and defense initiatives. I developed dashboards to improve VA hiring, supply chain management, and strategic planning—briefing insights to senior leadership. I built NLP and geospatial tools, including the ACAGPM R package for particulate matter mapping and a sentiment analysis pipeline processing 100k+ news articles. My work also supported organizational network analysis and health equity efforts.' 
    },
    { title: '2025', date: '01/01/2025', type: 'year' },
    { title: 'Paper: Anomolous Diffusion', date: '12/01/2024', icon: 'pi pi-cog', color: '#673AB7', type: 'project',
        link: 'https://doi.org/10.1016/j.nuclphysb.2024.116779'
     },
    { title: 'Paper: Hybrid System', date: '01/01/2024', icon: 'pi pi-cog', color: '#673AB7', type: 'project', 
        link: 'https://ieeexplore.ieee.org/document/10407498'
     },
    { title: '2024', date: '01/01/2024', type: 'year' },
    { title: 'MITRE: Associate Data Scientist', date: '05/01/2023', icon: 'pi pi-cog', color: '#673AB7', type: 'career',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
    { title: '2023', date: '01/01/2023', type: 'year' },
    { title: '2022', date: '01/01/2022', type: 'year' },
    { title: 'Wentworth: Undergraduate', date: '08/01/2021', icon: 'pi pi-shopping-cart', color: '#FF9800', type: 'career', 
        description: 'I attended Wentworth Institute of technology, where I am pursued a Bachelor of Science in Applied Mathematics and a minor in Data Science. Alongside my role as a student, I was a peer tutor sophomore year thru graduation, assisting others with succeeding in their mathematics courses. I also conducting research in collaboration with a professor and peer on the topic of quantum gravity, with the aims of making new discoveries in the field related to dimensional reduction.'
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
        <h1>Experience</h1>
        <div class="container">

            <div class="outercol">
                <!-- Outer -->
            </div>
            <div class="innercol">
                <div class="leftcol">
                    <h2>Timeline</h2>
                    <div class="timeline">

                        <!-- <Timeline :value="events"> -->
                        <Timeline :value="events" class="customized-timeline">
                            <template #content="slotProps" >
                                <div :class="{'transparent-div': slotProps.item.type === 'project' || slotProps.item.type === 'year'}" >
                                    <h3> {{ slotProps.item.title }} </h3>
                                    <p> {{ slotProps.item.description }} </p>
                                </div>
                            </template>
                            <template #opposite="slotProps">
                                <div :class="{'transparent-div': slotProps.item.type === 'career', 'event-year': slotProps.item.type === 'year'}" >
                                    <a v-if="slotProps.item.link" :href="slotProps.item.link" target="_blank">{{ slotProps.item.title }}</a>
                                    <div v-else>{{ slotProps.item.title }}</div>
                                </div>
                            </template>
                            
                        </Timeline>

                    </div>

                </div>
                <div class="rightcol">
                    <h2>Skills</h2>
                    <div class="skills">
                        <!-- <div>Selected: {{ selected }}</div> -->
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
}

.customized-timeline {
    /* border: 1px solid; */
    padding: 50px;
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
}

.customized-select {
    text-align: center;
    margin-bottom: 15px;
}

.customized-tags .p-tag{
    /* border: 1px solid; */
    margin: 5px;
}

</style>