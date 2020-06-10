import Vue from 'vue'
import App from './App'
import mySwiper from"@/components/swiper/index.vue"
import search from"./@/components/search/index.vue"
import grid from"./@/components/grid/index.vue"
import myList from"./@/components/list/list.vue"

// 注册全局组件
Vue.component('my-swiper',mySwiper)
Vue.component('search',search)
Vue.component('grid',grid)
Vue.component('myList',myList)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
