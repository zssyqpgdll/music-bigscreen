<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <!-- 头部 -->
      <div class="d-flex pt-2 pl-2">
        <span>
          <!-- 图标 -->
          <icon name="align-left" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2">充值金额排行</span>
        <!-- 装饰 -->
        <dv-decoration-5 class="dv-dec-3" />
      </div>

      <!-- 主体 -->
      <div class="d-flex ai-center flex-column body-box">
        <!-- 上下两个图 -->
        <!-- 上图:胶囊柱图 -->
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <!-- 下图 -->
        <centerRight2Chart1 />
      </div>
    </div>
  </div>
</template>

<script>
import centerRight2Chart1 from '@/components/echart/centerRight/centerRightChart'
import {dash2} from "../api/spark";

export default {
  data() {
    return {
      config: {
        data: [
          {
            name: 'A号选手',
            value: 167
          },
          {
            name: 'B号选手',
            value: 67
          },
          {
            name: 'C号选手',
            value: 123
          },
          {
            name: 'D号选手',
            value: 55
          },
          {
            name: 'E号选手',
            value: 98
          }
        ]
      }
    }
  },

  mounted() {
    this.loadData()
  },
  
  methods:{
    loadData(){
      dash2().then(res=>{
        // console.log(res.data.data)
        this.config.data = res.data.data.deposit_rank
        this.config = {...this.config}//刷新
      })
    }
  },

  components: { centerRight2Chart1 }
}
</script>

<style lang="scss" scoped>
#centerRight2 {
  $box-height: 410px;
  $box-width: 340px;
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: 160px;
    }
  }
}
</style>
