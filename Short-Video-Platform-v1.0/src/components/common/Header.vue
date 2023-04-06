<template>
    <el-menu router :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect"
        background-color="#121212" text-color="#fff" active-text-color="#FF6347">
        <el-menu-item index="/">推荐视频</el-menu-item>
        <el-menu-item index="/short">快手短视频</el-menu-item>
        <el-menu-item index="/haokan">好看短视频</el-menu-item>
        <el-menu-item index="/mini">六间房短视频</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let activeIndex: any = ref(window.localStorage.getItem('path'))
const handleSelect = (key: string, keyPath: string[]) => {
    window.localStorage.setItem('path', keyPath[0])
}



</script>