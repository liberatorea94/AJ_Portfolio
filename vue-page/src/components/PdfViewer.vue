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
        <a :href="pdfSource" target="_blank" >
            <img :src="pngSource" alt="My Resume" width="40%" style="border: 2px solid #e7e7e7; border-radius: 10px; overflow: hidden; margin: 50px; box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);"/>
        </a>
    </div>
</template>