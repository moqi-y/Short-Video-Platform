import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Short from '@/views/Short.vue'
import HaoKan from '@/views/HaoKan.vue'
import Mini from '@/views/Mini.vue'
const routes: any = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/short",
        name: 'Short',
        component: Short
    },
    {
        path: "/haokan",
        name: 'HaoKan',
        component: HaoKan
    },
    {
        path: "/mini",
        name: 'Mini',
        component: Mini
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;