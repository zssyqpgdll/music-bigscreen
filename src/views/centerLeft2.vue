<template>
  <div id="centerLeft1">
    <div class="bg-color-black">

      <!-- 头部 -->
      <div class="d-flex pt-2 pl-2">
        <span>
         <!-- 饼图的图标 -->
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">歌手TOP5</span>
          <!-- 装饰 -->
          <dv-decoration-1 class="dv-dec-1" />
        </div>
      </div>

      <!-- 主体 -->
      <div class="d-flex jc-center">
          <!-- 漏斗图 -->
          <RadarChart/>
      </div>
    </div>
  </div>
</template>

<script>
//引入第二个图
import RadarChart from "@/components/echart/RadarChart"

export default {
  //第二个图，设置为组件，可以作为标签直接使用
  components: {
    RadarChart
  },
};
</script>

<style lang="scss" scoped>
#centerLeft1 {
  $box-width: 300px;
  $box-height: 410px;
  padding: 16px;
  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-1 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
