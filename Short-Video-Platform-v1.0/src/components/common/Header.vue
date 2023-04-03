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
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()
let activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
// //当前页面路由
// let currentRoute = ref(router.currentRoute)
// console.log("currentRoute", currentRoute);

// //监听路由变化
// watch(currentRoute, (path) => {
//     console.log(path);
//     if (path == "Home") {
//         activeIndex.value = '/'
//     }
//     else if (path == "Short") {
//         activeIndex.value = '/short'
//     }
//     else if (path == "Haokan") {
//         activeIndex.value = '/haokan'
//     }
//     else if (path == "Haokan") {
//         activeIndex.value = '/mini'
//     }
// }, {
//     immediate: true //侦听器创建时立即监听
// })
</script>