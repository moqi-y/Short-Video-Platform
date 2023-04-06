<template>
    <video width="600" height="380" controls="true" autoplay="true" >
        <source :src="playUrl" type="video/mp4">
    </video>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const playUrl:any = ref(router.currentRoute.value.query.playUrl);


</script>