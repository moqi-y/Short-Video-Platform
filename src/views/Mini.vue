<template>
    <Card :videoList="videoList"></Card>
</template>
<script setup lang="ts">
import Card from '../components/common/Card.vue'
import { onBeforeMount, ref } from 'vue';
import { getMiniVideo } from '../utils/api/miniVideo';
const videoList: any = ref([])
onBeforeMount(async () => {
    let resoult = await getMiniVideo()
    videoList.value = resoult.data.result.list
})
</script>