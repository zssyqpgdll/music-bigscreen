import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入dataV, 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';//柱状图
import 'vue-awesome/icons/chart-area.js';//区域图
import 'vue-awesome/icons/chart-pie.js';//饼图
import 'vue-awesome/icons/chart-line.js';//折线图
import 'vue-awesome/icons/align-left.js';

//引入echart
//4.x 引用方式
import echarts from 'echarts'
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
//import * as echarts from 'echarts'

// 将全局的echarts对象挂载到Vue的原型对象上
// 在别的组件中，就可以通过 this.$echarts 使用
Vue.prototype.$echarts = echarts

/*
开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
*/
Vue.config.productionTip = false;//阻止启动生产消息

// 全局注册vue-awesome图标
Vue.component('icon', Icon);

//引入dataV包之后，使用
Vue.use(dataV);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
