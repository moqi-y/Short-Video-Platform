<template>
    <el-carousel :interval="4000" type="card" height="360px">
        <el-carousel-item v-for="item in 6" :key="item">
            <img src="https://i.328888.xyz/2023/03/29/iWXR7H.png" alt="">
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
}

.title:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 1200px;
    height: 16px;
    background: #FF6347;
    border-radius: 0 10px 10px 0;
    z-index: -1;
}
</style>