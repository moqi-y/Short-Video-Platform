<template>
    <Card :videoList="videoList"></Card>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { getShortVideo } from '../utils/api/shortVideo'
import Card from '../components/common/Card.vue'
const videoList: any = ref([])
onBeforeMount(async () => {
    let res = await getShortVideo()
    console.log("getShortVideo", res.data.result.list);
    videoList.value = res.data.result.list
})
</script>