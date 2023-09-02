import InsertView from '/src/components/InsertView.vue';
import {createRouter, createWebHistory} from "vue-router";
import SelectView from "../components/SelectView.vue";

const routes=[
    {
        path:'/',
        redirect:'home'
    },
    {
        path: '/home',
        component: InsertView
    },
    {
        path:'/info',
        component: SelectView
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;