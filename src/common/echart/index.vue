<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import tdTheme from './theme.json' // 引入默认主题
import '../map/fujian.js'

export default {
  name: 'echart',

  //接收父组件传过来的参数
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: ()=>({})
    }
  },

  data () {
    return {
      chart: null//初始为空
    }
  },

  //监控options的变化
  watch: {
    options: {
      handler (options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  
  //加载完成后
  mounted () {
    this.$echarts.registerTheme('tdTheme', tdTheme); // 覆盖默认主题
    this.initChart();//调用初始化图表方法
  },

  //销毁之前
  beforeDestroy () {
    this.chart.dispose()//释放资源
    this.chart = null//图表设为空
  },

  methods: {
    initChart () {
      // 初始化echart
      this.chart = this.$echarts.init(this.$el, 'tdTheme')
      this.chart.setOption(this.options, true)//options是父组件传过来的，设置true清空echart缓存
    }
  }
}
</script>

<style>
</style>
