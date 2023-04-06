<template>
    好看视频
    <Card :videoList="videoList"></Card>
</template>
<script setup lang="ts">
import Card from '../components/common/Card.vue'
import { onBeforeMount, ref } from 'vue';
import { getHaoKanVideo } from '../utils/api/haokanVideo';
const videoList: any = ref([])
onBeforeMount(async () => {
    let resoult = await getHaoKanVideo()
    videoList.value = resoult.data.result.list
})
</script>