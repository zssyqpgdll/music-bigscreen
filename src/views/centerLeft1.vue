<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
    
      <!-- 头部 -->
      <div class="d-flex pt-2 pl-2">
        <span>
          <!-- 柱状图的图标 -->
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">用户来源分布</span>
          <!-- 装饰 -->
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>

      <!-- 主体 -->
      <div class="d-flex jc-center">
        <CenterLeft1Chart />
      </div>
      <!-- 4个主要的数据 -->
<!--      <div class="bottom-data">-->
<!--        <div-->
<!--          class="item-box mt-2"-->
<!--          v-for="(item, index) in numberData"-->
<!--          :key="index"-->
<!--        >-->
<!--          <div class="d-flex">-->
<!--            <span class="coin">￥</span>-->
<!--            <dv-digital-flop class="dv-digital-flop" :config="item.number" />-->
<!--          </div>-->
<!--          <p class="text" style="text-align: center;">-->
<!--            {{ item.text }}-->
<!--            <span class="colorYellow">(件)</span>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
//引入第一个图
import CenterLeft1Chart from '@/components/echart/centerLeft/centerLeft1Chart'

export default {
  data() {
    return {
    //   numberData: [
    //     {
    //       number: {
    //         number: [15],
    //         toFixed: 1,
    //         textAlign: 'left',
    //         content: '{nt}',
    //         style: {
    //           fontSize: 24
    //         }
    //       },
    //       text: '今日构建总量'
    //     },
    //     {
    //       number: {
    //         number: [1144],
    //         toFixed: 1,
    //         textAlign: 'left',
    //         content: '{nt}',
    //         style: {
    //           fontSize: 24
    //         }
    //       },
    //       text: '总共完成数量'
    //     },
    //     {
    //       number: {
    //         number: [361],
    //         toFixed: 1,
    //         textAlign: 'left',
    //         content: '{nt}',
    //         style: {
    //           fontSize: 24
    //         }
    //       },
    //       text: '正在编译数量'
    //     },
    //     {
    //       number: {
    //         number: [157],
    //         toFixed: 1,
    //         textAlign: 'left',
    //         content: '{nt}',
    //         style: {
    //           fontSize: 24
    //         }
    //       },
    //       text: '未通过数量'
    //     }
    //   ]
    }
  },

  //第一个图，设置为组件，可以作为标签直接使用
  components: {
    CenterLeft1Chart
  },

  //载入后
  //一般我们的异步请求都写在这里，在这个阶段，数据和DOM都已被渲染出来
  mounted() {
    //改变事件
    // this.changeTiming()
  },

  methods: {
    // changeTiming() {
    //   //每3秒执行一次changeNumber函数
    //   setInterval(() => {
    //     this.changeNumber()
    //   }, 3000)
    // },
    
    // changeNumber() {
    //   this.numberData.forEach((item, index) => {
    //     item.number.number[0] += ++index
    //     item.number = { ...item.number }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
$box-width: 300px;
$box-height: 410px;

#centerLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item-box {
      & > div {
        padding-right: 5px;
      }
      font-size: 14px;
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 120px;
        height: 30px;
      }
      // 金币
      .coin {
        position: relative;
        top: 6px;
        font-size: 20px;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
