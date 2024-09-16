<template>
  <div>
    <!--把cdata数据传到./chart.vue中-->
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import {plays} from "../../../../api/spark";

export default {
  data () {
    return {
      //初始数据
      drawTiming: null,
      cdata: {
        // year: null,
        weekCategory: [],
        // radarData: [],
        // radarDataAvg: [],
        maxData: 100,
        weekMaxData: [],
        weekLineData: []
      }
    }
  },

  components: {
    Chart,
  },

  mounted () {
    this.drawTimingFn();
  },

  beforeDestroy () {
    //销毁定时器
    clearInterval(this.drawTiming);
  },
  
  methods: {
    //设置定时器，每6秒执行一次setData()方法
    drawTimingFn () {
      this.setData();
      this.drawTiming = setInterval(() => {
        this.setData();
      }, 10000);
    },

    setData () {
      plays().then(res=>{
        const plays = res.data.data
        // console.log(plays)
        this.cdata.weekCategory = plays.xData//最新的15个登陆日期，作为x轴数据
        this.cdata.weekMaxData = plays.plays//某一天的播放次数，作为柱状图数据
        this.cdata.weekLineData = plays.plays;//某一天的播放次数，作为折线图数据

        //取出播放次数列表中最大的值，并转为整数
        var max = -1;
        for (var i=0;i<plays.plays.length;i++)
        {
          if(parseInt(plays.plays[i]) > max){
            max = parseInt(plays.plays[i]);
          }
        }
        // console.log(max)
        this.cdata.maxData = max + 10;//设置y轴坐标的最大值
        // this.cdata.radarData = [85,9,9,3];//没用了
        // this.cdata.radarDataAvg = [75,8,8,3];//没用了
        // //没用了
        // let dateBase = new Date();
        // this.cdata.year = dateBase.getFullYear();
      })

      // 清空轮询数据
      // this.cdata.weekCategory = ["2021-11-27","2021-11-28"];
      // this.cdata.weekMaxData = [100,190];
      // this.cdata.weekLineData = [60,88];

      // 周数据
      // for (let i = 0; i < 7; i++) {
      //   // 日期
      //   let date = new Date();
      //   this.cdata.weekCategory.unshift([date.getMonth() + 1, date.getDate()-i].join("/"));
      //
      //   // 折线图数据
      //   this.cdata.weekMaxData.push(this.cdata.maxData);
      //   let distance = Math.round(Math.random() * 11000 + 500);
      //   this.cdata.weekLineData.push(distance);
      //
      //   // 雷达图数据
      //   // 我的指标
      //   let averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
      //   let maxSpeed = averageSpeed + +(Math.random() * 3).toFixed(2);
      //   let hour = +(distance / 1000 / averageSpeed).toFixed(1);
      //   let radarDayData = [distance, averageSpeed, maxSpeed, hour];
      //   this.cdata.radarData.unshift(radarDayData);
      //
      //   // 平均指标
      //   let distanceAvg = Math.round(Math.random() * 8000 + 4000);
      //   let averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
      //   let maxSpeedAvg = averageSpeedAvg + +(Math.random() * 2).toFixed(2);
      //   let hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
      //   let radarDayDataAvg = [
      //     distanceAvg,
      //     averageSpeedAvg,
      //     maxSpeedAvg,
      //     hourAvg
      //   ];
      //   this.cdata.radarDataAvg.unshift(radarDayDataAvg);
      // }

    }
  }
};
</script>

<style lang="scss" scoped>
</style>
