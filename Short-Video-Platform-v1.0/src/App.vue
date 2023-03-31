<script setup lang="ts">
import Header from '@/components/common/Header.vue'
</script>

<template>
  <div class="page">
    <Header></Header>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.page {
  width: 1300px;
  margin: 0 auto;
}
</style>
