<template>
    <div class="card-box">
        <el-card @click="onPlay(item)" v-for="item in videoList" key="item.id" class="card" :body-style="{ padding: '0px' }">
            <img :src="item.coverUrl?item.coverUrl:item.picurl" class="image" />
            <div class="card-info" style="padding: 14px">
                <span class="card-info-title">{{ item.title }}</span>
                <div class="card-user">
                    <img :src="item.userPic?item.userPic:item.picuser" alt="">
                    <span>{{ item.userName }}</span>
                </div>
                <div class="bottom" v-if="item.duration">
                    <time class="time">时长：{{ item.duration }}</time>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount,defineProps} from 'vue'
import { useRouter } from 'vue-router';
import { getHaoKanVideo } from '../../utils/api/haokanVideo'
const props = defineProps({
  videoList: String
})
let router = useRouter()
const onPlay= (e:any)=>{
    console.log("item",e);
    router.push({
        path: '/play', 
        query:{
            playUrl:e.playUrl
        }
    })
}
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
    /* height: 340px; */
    margin: 10px 20px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 10px 10px 5px -4px #FF6347;
    color: #FF6347;
}

.card-info {
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.card-info-title {
    font-size: 16px;
}

.card-info img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.card-user {
    display: flex;
    align-items: center;
}

.card-user span {
    margin-left: 5px;
    font-size: 14px;
    color: #FF6347;
}
</style>