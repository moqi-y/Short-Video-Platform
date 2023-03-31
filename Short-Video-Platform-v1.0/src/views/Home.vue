<template>
    <el-carousel v-if="sliderList.length > 0" :interval="4000" type="card" height="360px">
        <el-carousel-item v-for="item in sliderList" :key="item.id">
            <img :src='item.url' alt="item.title">
        </el-carousel-item>
    </el-carousel>
    <div class="title-box">
        <div class="title">
            <span>推荐视频</span>
        </div>
    </div>

    <Card></Card>
</template>
<script setup lang="ts">
import Card from '@/components/common/Card.vue'
import { onBeforeMount, ref } from 'vue';
import { getSlider } from '../utils/api/slider'
let sliderList: any = ref([])
onBeforeMount(async () => {
    let res = await getSlider()
    console.log("请求数据测试：", res.data.result.list);
    sliderList.value = res.data.result.list
})
</script>
<style scoped>
.title {
    width: 100px;
    border: 10px solid #FF6347;
    border-radius: 30px 2px 30px 0;
    background: #FF6347;
    text-align: center;
    color: #ffffff;
    font-weight: 600;
}

.title-box {
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
}

.title:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 1250px;
    height: 16px;
    background: #FF6347;
    border-radius: 0 10px 10px 0;
    z-index: -1;
}
</style>