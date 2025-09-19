<script setup>

import Timeline from 'primevue/timeline';

const events = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', type: 'project' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', type: 'career' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800', type: 'career' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', type: 'project' }
];

function isTransparent(type) {
    return type === 'career';
}
// const opposites = [
//     { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
//     { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
// ]

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
                            <template #content="slotProps">
                                <div :class="{'transparent-div': slotProps.item.type === 'project'}">
                                    {{ slotProps.item.status }}
                                </div>
                            </template>
                            <template #opposite="slotProps">
                                <div :class="{'transparent-div': slotProps.item.type === 'career'}">
                                    {{ slotProps.item.status }}
                                </div>
                            </template>
                            
                        </Timeline>

                    </div>

                </div>
                <div class="rightcol">
                    <h2>Tools</h2>
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
  border: 1px solid;
}

.innercol {
  display: flex;
  flex: 60%;
  /* padding: 10px; */
  border: 1px solid;
}

.leftcol {
  flex: 66.7%; 
  display: inline-block;
  border: 1px solid;
}

.rightcol {
  flex: 33.3%; 
  display: inline-block; 
  border: 1px solid;
}

.timeline {
    border: 1px solid;
    height: 1000px;
}

.customized-timeline {
    border: 1px solid;
    padding: 50px;
}

.transparent-div {
    opacity: 0;
}

</style>