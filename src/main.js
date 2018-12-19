// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**
 *  引入
 */
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// axios 封装
import '@/utils/request'
// 引入 ElementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 v-chart
import 'v-charts/lib/style.css' // v-charts 样式
import VCharts from 'v-charts' // v-charts

// 引入 vue-amap
import VueAMap from 'vue-amap'

/**
 * 引入style.less
 * */
import '@/assets/css/style.less'

/**
 * 引入v-chart二次封装组件
 */
// 全局组件
import Card from '@/components/card/card'
import Box from '@/components/Box'
import MainCard from '@/components/card/MainCard'
import SelectRegion from '@/components/SelectRegion'
import DatePicker from '@/components/DatePicker/DatePicker'
import DataDisplay from '@/components/DataDisplay'
import histogram from '@/components/charts/histogram'
import line from '@/components/charts/line'
import pie from '@/components/charts/pie'
import pieLevel from '@/components/charts/pieLevel'
import radar from '@/components/charts/radar'
import RadarSingle from '@/components/charts/RadarSingle'
import ring from '@/components/charts/ring'
import gauge from '@/components/charts/gauge'
import mapWell from '@/components/map/mapWell'

/* 注册 */
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(VCharts)

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '70d2eedd7e371fe7b81c21499cca38fb',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
/**
 * 全局组件注册
 */
Vue.component('card', Card)
Vue.component('box', Box)
Vue.component('main-card', MainCard)
Vue.component('select-region', SelectRegion)
Vue.component('date-picker', DatePicker)
Vue.component('data-display', DataDisplay)
// 图表
Vue.component('h-histogram', histogram)
Vue.component('h-line', line)
Vue.component('h-pie', pie)
Vue.component('h-pie-level', pieLevel)
Vue.component('h-radar', radar)
Vue.component('h-radar-single', RadarSingle)
Vue.component('h-ring', ring)
Vue.component('h-gauge', gauge)

// 地图
Vue.component('map-well', mapWell)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
