<script setup>
// import { computed } from 'vue';


    const props =  defineProps({
        pdfSource: String,
        pngSource: String
    });

    
    // data( {
        
    //     pdfUrl: this.pdfSource,
        
    // })
    

</script>

<template>
    <div>
        <!-- <iframe :src="pdfSource" width="100%" height="1000px" frameborder="0">
            Download it here.
        </iframe> -->
        <a :href="pdfSource" target="_blank">
            <img :src="pngSource" alt="My Resume" width="40%"/>
        </a>
    </div>
</template>