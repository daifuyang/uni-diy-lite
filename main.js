import Vue from 'vue'
import App from './App'
import mySwiper from "@/components/swiper/index.vue"
import search from "@/components/search/index.vue"
import grid from "@/components/grid/index.vue"
import myList from "@/components/list/list.vue"
import myParse from "@/components/myParse.vue"
import tabBar from "@/components/tabbar/index.vue"
// 注册全局组件
Vue.component('mySwiper',mySwiper)
Vue.component('search',search)
Vue.component('grid',grid)
Vue.component('myList',myList)
Vue.component('myParse',myParse)
Vue.component('tabBar',tabBar)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
