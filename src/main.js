import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 通过axios拦截器添加token验证
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token');
  // console.log(config);
  // 在最后必须 return config
  return config;
})
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')