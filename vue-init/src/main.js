// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//解决点击300ms延迟
import Fastclick from 'fastclick'
Fastclick.attach(document.body)

//自适应文件配置
import 'js/html5.js'

//axios
import axios from 'axios'
Vue.prototype.axios = axios

// 公共样式
import 'css/reset.css'

// swiper
import VueSwiper from 'vue-awesome-swiper'
Vue.use(VueSwiper,)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
