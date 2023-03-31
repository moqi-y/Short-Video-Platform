<template>
    <div class="card-box">
        <el-card v-for="(item, index) in 12" class="card" :body-style="{ padding: '0px' }">
            <img src="https://i.328888.xyz/2023/03/29/iWXR7H.png" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button text class="button">Operating</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.card-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}

.card {
    width: 20%;
    height: 460px;
    margin: 10px 20px;
}
</style>