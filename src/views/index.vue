<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <!-- 加载 -->
      <dv-loading v-if="loading">Loading...</dv-loading>

      <div v-else class="host-body">
        <!-- 第一行: 头部title部分 -->
        <div class="d-flex jc-center">
          <!-- 第一行: 左边 -->
          <dv-decoration-10 class="dv-dec-10" />

          <!-- 第一行: 中间 -->
          <div class="d-flex jc-center">
            <!-- 第一行: 中间-左 -->
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <!-- 第一行: 中间-中 -->
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <!-- 第一行: 中间-中-title下边的画线装饰 -->
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <!-- 第一行: 中间-右 -->
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="['#568aea', '#000000']" />
          </div>

          <!-- 第一行: 右边 -->
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>


        <!-- 第二行:头部时间、Spark部分 -->
        <div class="d-flex jc-between px-2">
          <!-- 第二行:左边 -->
          <div class="d-flex aside-width">
            <!-- 第二行:左边-左title音乐大数据 -->
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text">音乐大数据</span>
            </div>
            <!-- 第二行:左边-右title-Spark -->
            <div class="react-right ml-3">
              <span class="text">Spark</span>
            </div>
          </div>

          <!-- 第二行:右边 -->
          <div class="d-flex aside-width">
            <!-- 第二行:右边-左 -->
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">vue超酷数据大屏</span>
            </div>
            <!-- 第二行:右边-右-时间 -->
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>
            </div>
          </div>
        </div>


        <!--主体画图-->
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <!-- 左边 -->
            <!-- 第三行数据：第一个图 -->
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <!-- 第三行数据：第二个图 -->
            <div>
              <dv-border-box-12>
                <centerLeft2 />
              </dv-border-box-12>
            </div>

            <!-- 中间 -->
            <!-- 第三行数据：第三个图 -->
            <div>
              <center />
            </div>

            <!-- 右边 -->
            <!-- 第三行数据：第四个图 -->
            <div>
              <centerRight2 />
            </div>
            <!-- 第三行数据：第五个图 -->
            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>


          <!-- 第四行数据 -->
          <div class="bototm-box">
            <!-- 第四行数据：第一个图 -->
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <!-- 第四行数据：第二个图 -->
            <dv-border-box-12>
              <bottomRight />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//mixin等比例缩放函数，自适应缩放
import drawMixin from "../utils/drawMixin";
//日期格式转换
import { formatTime } from '../utils/index.js'
//引入组件视图
import centerLeft1 from './centerLeft1'
import centerLeft2 from './centerLeft2'
import centerRight1 from './centerRight1'
import centerRight2 from './centerRight2'
import center from './center'
import bottomLeft from './bottomLeft'
import bottomRight from './bottomRight'

export default {
  //注册mixin
  mixins: [ drawMixin ],

  data() {
    return {
      timing: null,//定时器
      loading: true,//loading图，初始设为true，这样进入大屏之前会先加载
      dateDay: null,//时分秒
      dateYear: null,//年月日
      dateWeek: null,//周几
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }
  },

  //组件
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    center,
    bottomLeft,
    bottomRight
  },

  //钩子函数，一般在初始化页面完成后，再对dom节点进行相关操作
  //载入后
  mounted() {
    this.timeFn()//载入后设置定时器，获取实时时间
    this.cancelLoading()//加载loading图，0.5秒后关闭
  },

  //销毁前，methods、子组件都可以使用
  //清除vue实例与DOM的关联
  beforeDestroy () {
    //销毁定时器
    clearInterval(this.timing)
  },

  //方法
  methods: {
    //设置定时器，每一秒更新一次最新时间
    timeFn() {
      //setInterval设置定时器
      //对事件format格式化
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },

    //取消加载
    cancelLoading() {
      //0.5秒后关闭加载页面
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>


<!--
sass是以严格缩进语法规则来编写代码的，不包括大括号和分号，而scss的语法和css书写语法类似；sass的安装
scss是sass3.0引入的语法，可以理解scss是sass的一个升级版本，是一种SCSS-like语言，弥补了sass和css之间的鸿沟；
-->
<style lang="scss">
//引入scss文档
@import '../assets/scss/index.scss';
</style>
