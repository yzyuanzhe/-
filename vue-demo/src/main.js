// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import MyAxios from '@/plugins/MyAxios';
import '@/assets/css/style.css';
import moment from 'moment';
import MyBreadcrumb from '@/components/MyBreadcrumb';
// import Qs from 'qs';


// Vue.config.productionTip = false;

// // import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios);

//  import qs from 'qs'
//  axios.defaults.transformRequest = [function (data) {
//     return qs.stringify(data)
//  }]


// 注册全局组件
// Vue.component(MyBreadcrumb.name, MyBreadcrumb);

// // 全局过滤器，格式化日期
// Vue.filter('fmtDate', (value, fmtString) => {
//   return moment(value).format(fmtString);
// });

// 注册MyAxios插件
Vue.use(MyAxios);
// 注册ElementUI插件
Vue.use(ElementUI);
// Vue.use(Qs);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
