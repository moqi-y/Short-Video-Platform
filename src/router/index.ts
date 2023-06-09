import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Short from '../views/Short.vue'
import HaoKan from '../views/HaoKan.vue'
import Mini from '../views/Mini.vue'
import Play from '../views/Play.vue'
import { createHash } from 'crypto'
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
    },
    {
        path: "/play",
        name: 'Play',
        component: Play
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;