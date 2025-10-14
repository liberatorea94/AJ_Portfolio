<script setup>

    const props =  defineProps({
        pdfSource: String,
        pngSource: String
    });
    
    function isMobileUserAgent() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /android|ipad|playbook|silk/i.test(userAgent);
    }

    const isMobile = isMobileUserAgent()

</script>

<template>
    <div>
        <a :href="pdfSource" target="_blank" style=" display: block;" class="pdfframe" :class="{'pdfframe-mobile': isMobile}">
            <img :src="pngSource" alt="My Resume" class="pdf" />
        </a>
    </div>
</template>

<style scoped>

    .pdfframe {
        margin: 30%;
        margin-top: 50px;
        width: 40%;
    }

    .pdfframe-mobile {
        margin: 5%;
        width: 90%;
    }

    .pdf {
        border: 2px solid #e7e7e7;
        border-radius: 10px; 
        overflow: hidden; 
        box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1); 
        width: 100%;
    }

</style>